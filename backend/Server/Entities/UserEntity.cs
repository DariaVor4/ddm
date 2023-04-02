using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Server.Entities;

/// Пользователь
public class UserEntity : AppBaseEntity {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }

    /// Подтверждённая почта
    public string Email { get; set; } = null!;

    /// Bcrypt хэш пароля
    public string Password { get; set; } = null!;

    /// Авторизован ли пользователь
    public bool IsLoggedIn { get; set; }

    /// Последняя активность
    public DateTime? LastActivity { get; set; }

    /// Сотрудник, привязанный к пользователю
    public EmployeeEntity? Employee { get; set; }

    public Guid? EmployeeId { get; set; }

    /// Студент, привязанный к пользователю
    public StudentEntity? Student { get; set; }

    public Guid? StudentId { get; set; }

    /// Уведомления пользователя
    public List<NotificationToUser> NotificationToUsers { get; set; } = null!;

    /// Динамически вычисляемая роль пользователя
    [NotMapped]
    public UserRoleEnum UserRole {
        get {
            if (Employee != null)
                return Employee.IsAdmin ? UserRoleEnum.Admin : UserRoleEnum.Employee;
            if (Student != null)
                return UserRoleEnum.Student;
            throw new Exception("К пользователю не привязан ни сотрудник ни студент");
        }
    }
}

public class UserEntityConfiguration : IEntityTypeConfiguration<UserEntity> {
    public void Configure(EntityTypeBuilder<UserEntity> builder) {
        builder.ToTable(nameof(UserEntity));
        builder.HasQueryFilter(e => e.DeletedAt == null);
    }
}

public enum UserRoleEnum {
    Admin,
    Employee,
    Student,
}