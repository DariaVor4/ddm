using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Server.Entities;

/// Студент
public class StudentEntity : AppBaseEntity {
    /// Пользователь к которому привязан сотрудник
    [ForeignKey(nameof(UserId))]
    public UserEntity User { get; set; } = null!;

    [Key] public Guid UserId { get; set; }

    // TODO: Уведомление о прибытии?
    // TODO: Миграционная карта?
    // TODO: Виза?
    // TODO: Паспорт?

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
    // TODO: List<Визовые анкеты>
}

public class StudentEntityConfiguration : IEntityTypeConfiguration<StudentEntity> {
    public void Configure(EntityTypeBuilder<StudentEntity> builder) {
        builder.ToTable(nameof(StudentEntity));
        builder.HasQueryFilter(e => e.DeletedAt == null);
    }
}