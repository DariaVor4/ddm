using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VisaCenterBackend.Shared.DB.Entities;

/// Студент
public class StudentEntity : AppBaseEntity {
  /// Пользователь к которому привязан сотрудник
  [ForeignKey(nameof(UserId))]
  public UserEntity User { get; set; } = null!;
  [Key] public Guid UserId { get; set; }

  /// Уведомление о прибытии студента
  [ForeignKey(nameof(ArrivalNoticeId))]
  public StudentArrivalNoticeEntity? ArrivalNotice { get; set; }
  public Guid ArrivalNoticeId { get; set; }

  /// Миграционная карта студента
  [ForeignKey(nameof(MigrationCardId))]
  public StudentMigrationCardEntity? MigrationCard { get; set; }
  public Guid MigrationCardId { get; set; }

  /// Виза студента. Её id - строка, идентификатор самой визы
  [ForeignKey(nameof(VisaId))]
  public StudentVisaEntity? Visa { get; set; }
  public string VisaId { get; set; } = null!;

  /// Паспорт студента
  [ForeignKey(nameof(PassportId))]
  public StudentPassportEntity? Passport { get; set; }
  public Guid PassportId { get; set; }

  /// Телефон
  public string? Phone { get; set; }

  /// Куратор
  public string? Curator { get; set; }

  /// Факультет
  public string? Faculty { get; set; }

  /// Курс
  public int? Course { get; set; }

  /// Группа
  public string? Group { get; set; }

  /// Близкие родственники
  public List<StudentCloseRelativeEntity> CloseRelatives { get; set; } = null!;

  /// Визовые анкеты
  public List<StudentVisaRequestEntity> VisaRequests { get; set; } = null!;
}

public class StudentEntityConfiguration : IEntityTypeConfiguration<StudentEntity> {
  public void Configure(EntityTypeBuilder<StudentEntity> builder) {
    builder.ToTable(nameof(StudentEntity));
    builder.HasQueryFilter(e => e.DeletedAt == null);
  }
}