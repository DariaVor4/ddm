using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Server.Entities;

/// Близкий родственник студента
public class StudentCloseRelativeEntity : AppBaseEntity {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }

    /// Студент к которому относится близкий родственник
    [ForeignKey(nameof(StudentId))]
    public StudentEntity Student { get; set; } = null!;

    public Guid StudentId { get; set; }

    /// Фамилия
    public string? LastName { get; set; }

    /// Имя
    public string? FirstName { get; set; }

    /// Отчество
    public string? Patronymic { get; set; }

    /// Дата рождения
    public DateTime? BirthDate { get; set; }

    /// Гражданство
    public string? Citizenship { get; set; }

    /// Постоянное место жительства
    public string? AddressContinuousResidence { get; set; }
}

public class StudentCloseRelativeEntityConfiguration : IEntityTypeConfiguration<StudentCloseRelativeEntity> {
    public void Configure(EntityTypeBuilder<StudentCloseRelativeEntity> builder) {
        builder.ToTable(nameof(StudentCloseRelativeEntity));
        builder.HasQueryFilter(e => e.DeletedAt == null);
    }
}