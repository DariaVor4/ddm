using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VisaCenterBackend.Shared.DB.Entities;

/// Таблица для подтверждения почтовых адресов
public class ConfirmationEmailEntity : AppBaseEntity {
  [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
  public Guid Id { get; set; }

  /// Подтверждаемая почта
  public string Email { get; set; } = null!;

  /// Код подтверждения
  public string Code { get; set; } = null!;

  /// Выполнено ли подтверждение
  public bool IsConfirmed { get; set; }
}

public class ConfirmationEmailEntityConfiguration : IEntityTypeConfiguration<ConfirmationEmailEntity> {
  public void Configure(EntityTypeBuilder<ConfirmationEmailEntity> builder) {
    builder.ToTable(nameof(ConfirmationEmailEntity));
    builder.HasQueryFilter(e => e.DeletedAt == null);
  }
}