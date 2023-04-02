using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Server.Entities;

/// Виза студента
public class StudentVisaEntity: AppBaseEntity {
    public Guid Id { get; set; }

    /// Студент которому принадлежит виза
    public StudentEntity Student { get; set; } = null!;

    public Guid StudentId { get; set; }

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