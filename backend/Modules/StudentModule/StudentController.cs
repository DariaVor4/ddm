using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VisaCenterBackend.Shared.DB;
using VisaCenterBackend.Shared.DB.Entities;

namespace VisaCenterBackend.Modules.StudentModule;

[ApiController]
[Route("students")]
public class StudentController : ControllerBase {
  private readonly AppDbContext _db;
  public StudentController(AppDbContext dbContext) => _db = dbContext;

  /// Получение списка студентов
  [HttpGet]
  // TODO: Для ролей сотрудник и администратор
  public IEnumerable<UserEntity> GetUsers() {
    var students = _db.User
      .Include(e => e.Student)
      .Include(e => e.Employee)
      .ToList();
    return students;
  }
}