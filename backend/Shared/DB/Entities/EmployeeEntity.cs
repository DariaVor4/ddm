using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VisaCenterBackend.Shared.DB.Entities;

/// Сотрудник
public class EmployeeEntity : AppBaseEntity {
  /// Пользователь к которому привязан сотрудник
  [ForeignKey(nameof(UserId))]
  public UserEntity User { get; set; } = null!;
  [Key] public Guid UserId { get; set; }

  /// Фамилия
  public string? LastName { get; set; }

  /// Имя
  public string? FirstName { get; set; }

  /// Отчество
  public string? Patronymic { get; set; }

  /// Является ли сотрудник администратором?
  public bool IsAdmin { get; set; }
}

public class EmployeeEntityConfiguration : IEntityTypeConfiguration<EmployeeEntity> {
  public void Configure(EntityTypeBuilder<EmployeeEntity> builder) {
    builder.ToTable(nameof(EmployeeEntity));
    builder.HasQueryFilter(e => e.DeletedAt == null);
  }
}