using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Server.Entities;

/// Миграционная карта студента
public class StudentMigrationCardEntity: AppBaseEntity {
    public Guid Id { get; set; }

    /// Студент которому принадлежит миграционная карта
    public StudentEntity Student { get; set; } = null!;

    public Guid StudentId { get; set; }

    /// Серия
    public string? Series { get; set; }

    /// Номер
    public string? Number { get; set; }

    /// Дата выдачи
    public DateTime? IssueDate { get; set; }

    /// Дата истечения
    public DateTime? ExpirationDate { get; set; }
}

public class StudentMigrationCardEntityConfiguration : IEntityTypeConfiguration<StudentMigrationCardEntity> {
    public void Configure(EntityTypeBuilder<StudentMigrationCardEntity> builder) {
        builder.ToTable(nameof(StudentMigrationCardEntity));
        builder.HasQueryFilter(e => e.DeletedAt == null);
    }
}