using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VisaCenterBackend.Shared.DB.Entities;

/// Виза студента
public class StudentVisaEntity : AppBaseEntity {
  // Id визы - строка, т.к. это идентификатор самой визы, который не должен генерироваться БД
  [DatabaseGenerated(DatabaseGeneratedOption.None)]
  public string Id { get; set; } = null!;

  /// Студент которому принадлежит виза
  public StudentEntity Student { get; set; } = null!;

  /// Серия бланка
  public string? BlankSeries { get; set; }

  /// Номер
  public string? Number { get; set; }

  /// Дата выдачи
  public DateTime? IssueDate { get; set; }

  /// Дата истечения
  public DateTime? ExpirationDate { get; set; }

  /// Номер приглашения
  public string? InvitationNumber { get; set; }
}

public class StudentVisaEntityConfiguration : IEntityTypeConfiguration<StudentVisaEntity> {
  public void Configure(EntityTypeBuilder<StudentVisaEntity> builder) {
    builder.ToTable(nameof(StudentVisaEntity));
    builder.HasQueryFilter(e => e.DeletedAt == null);
  }
}