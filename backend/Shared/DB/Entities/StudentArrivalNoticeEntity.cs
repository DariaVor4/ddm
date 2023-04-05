using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VisaCenterBackend.Shared.DB.Entities;

/// Уведомление о прибытии
public class StudentArrivalNoticeEntity : AppBaseEntity {
  public Guid Id { get; set; }

  /// Студент которому принадлежит уведомление о прибытии
  public StudentEntity Student { get; set; } = null!;

  /// Профессия
  public string? Profession { get; set; }

  /// Адрес регистрации
  public string? Address { get; set; }

  /// Дата регистрации
  public DateTime? Date { get; set; }

  /// Дата окончания регистрации
  public DateTime? Expires { get; set; }

  /// Приглашающая сторона
  public string? InvitingSide { get; set; }

  /// Принимающая сторона
  public string? ReceivingSide { get; set; }
}

public class StudentArrivalNoticeEntityConfiguration : IEntityTypeConfiguration<StudentArrivalNoticeEntity> {
  public void Configure(EntityTypeBuilder<StudentArrivalNoticeEntity> builder) {
    builder.ToTable(nameof(StudentArrivalNoticeEntity));
    builder.HasQueryFilter(e => e.DeletedAt == null);
  }
}