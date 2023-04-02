using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Server.Entities;

/// Уведомления к пользователям
[PrimaryKey(nameof(UserId), nameof(NotificationId))]
public class NotificationToUser : AppBaseEntity {
    /// Пользователь, которому адресовано уведомление
    [ForeignKey(nameof(UserId))]
    public UserEntity User { get; set; } = null!;

    public Guid UserId { get; set; }

    /// Уведомление
    [ForeignKey(nameof(NotificationId))]
    public NotificationEntity Notification { get; set; } = null!;

    public Guid NotificationId { get; set; }

    /// Прочитал ли пользователь уведомление?
    public bool IsRead { get; set; } = false;
}

public class NotificationToUserConfiguration : IEntityTypeConfiguration<NotificationToUser> {
    public void Configure(EntityTypeBuilder<NotificationToUser> builder) {
        builder.ToTable(nameof(NotificationToUser));
        builder.HasQueryFilter(e => e.DeletedAt == null);
    }
}