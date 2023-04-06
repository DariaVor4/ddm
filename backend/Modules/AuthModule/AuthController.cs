using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using VisaCenterBackend.Modules.AuthModule.Responses;
using VisaCenterBackend.Shared;
using VisaCenterBackend.Shared.DB;

namespace VisaCenterBackend.Modules.AuthModule;

[ApiController]
[Route("auth")]
public class AuthController : ControllerBase {
  private readonly AppDbContext _db;
  private readonly AppConfigService _appConfig;

  public AuthController(AppDbContext dbContext, AppConfigService appConfig) {
    _db = dbContext;
    _appConfig = appConfig;
  }

  // Авторизация
  [HttpPost("login")]
  public async Task<ActionResult<LoginResponse>> Login([FromBody] LoginInput input) {
    // Поиск пользователя по email
    var user = await _db.User
      .Where(e => e.Email == input.Email)
      .Include(u => u.Student)
      .Include(u => u.Employee)
      .FirstOrDefaultAsync();
    if (user == null) return NotFound();
    // Проверка пароля
    if (!BCrypt.Net.BCrypt.Verify(input.Password, user.Password)) return Unauthorized();
    // Создание AccessToken
    var token = new JwtSecurityToken(
      claims: new List<Claim> {
        new("id", user.Id.ToString()),
        new("email", user.Email),
        new("role", user.UserRole.ToString()),
      },
      expires: DateTime.Now.AddMilliseconds(_appConfig.AccessTokenExpires),
      signingCredentials: new SigningCredentials(
        new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appConfig.AccessTokenSecret)),
        SecurityAlgorithms.HmacSha256Signature
      )
    );
    user.IsLoggedIn = true;
    await _db.SaveChangesAsync();
    // Возврат ответа
    return Ok(new LoginResponse {
      User = user,
      AccessToken = new JwtSecurityTokenHandler().WriteToken(token),
    });
  }
}