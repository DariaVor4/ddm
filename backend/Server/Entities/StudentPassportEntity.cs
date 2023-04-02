using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Server.Entities;

/// Паспорт студента
public class StudentPassportEntity : AppBaseEntity {
    public Guid Id { get; set; }

    /// Студент которому принадлежит паспорт
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

    /// Место рождения
    public string? BirthPlace { get; set; }

    /// Пол
    public GenderEnum? Gender { get; set; }

    /// Гражданство
    public string? Citizenship { get; set; }

    /// Серия
    public string? Series { get; set; }

    /// Номер
    public string? Number { get; set; }

    /// Дата выдачи
    public DateTime? IssueDate { get; set; }

    /// Кем выдан
    public string? IssuedBy { get; set; }

    /// Дата истечения
    public DateTime? ExpirationDate { get; set; }
}

public class StudentPassportEntityConfiguration : IEntityTypeConfiguration<StudentPassportEntity> {
    public void Configure(EntityTypeBuilder<StudentPassportEntity> builder) {
        builder.ToTable(nameof(StudentPassportEntity));
        builder.HasQueryFilter(e => e.DeletedAt == null);
    }
}

/// Пол
public enum GenderEnum {
    Male,
    Female,
}