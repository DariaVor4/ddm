using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VisaCenterBackend.Shared.DB.Entities;

/// Уведомление
public class NotificationEntity : AppBaseEntity {
  [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
  public Guid Id { get; set; }

  /// Заголовок уведомления
  public string Title { get; set; } = null!;

  /// Текст уведомления
  public string Content { get; set; } = null!;

  /// Получатели
  public List<NotificationToUser> NotificationToUsers { get; set; } = null!;
}

public class NotificationEntityConfiguration : IEntityTypeConfiguration<NotificationEntity> {
  public void Configure(EntityTypeBuilder<NotificationEntity> builder) {
    builder.ToTable(nameof(NotificationEntity));
    builder.HasQueryFilter(e => e.DeletedAt == null);
  }
}