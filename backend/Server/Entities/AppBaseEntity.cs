namespace Server.Entities;

public class AppBaseEntity {
    /// Дата создания записи
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    /// Дата обновления записи
    public DateTime? UpdatedAt { get; set; }

    /// Дата удаления записи
    public DateTime? DeletedAt { get; set; }
}