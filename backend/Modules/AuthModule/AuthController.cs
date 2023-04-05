using Microsoft.AspNetCore.Mvc;
using VisaCenterBackend.Shared.DB;

namespace VisaCenterBackend.Modules.AuthModule;

[ApiController]
[Route("auth")]
public class AuthController : ControllerBase {
  private readonly AppDbContext _db;
  public AuthController(AppDbContext dbContext) => _db = dbContext;
}