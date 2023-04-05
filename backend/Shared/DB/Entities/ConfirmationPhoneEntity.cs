using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VisaCenterBackend.Shared.DB.Entities;

/// Таблица для подтверждения номеров телефонов
public class ConfirmationPhoneEntity : AppBaseEntity {
  [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
  public Guid Id { get; set; }

  /// Подтверждаемый номер телефона
  public string Phone { get; set; } = null!;

  /// Код подтверждения
  public string Code { get; set; } = null!;

  /// Выполнено ли подтверждение
  public bool IsConfirmed { get; set; }
}

public class ConfirmationPhoneEntityConfiguration : IEntityTypeConfiguration<ConfirmationPhoneEntity> {
  public void Configure(EntityTypeBuilder<ConfirmationPhoneEntity> builder) {
    builder.ToTable(nameof(ConfirmationPhoneEntity));
    builder.HasQueryFilter(e => e.DeletedAt == null);
  }
}