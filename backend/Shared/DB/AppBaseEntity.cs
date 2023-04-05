using System.Text.Json.Serialization;

namespace VisaCenterBackend.Shared.DB;

public abstract class AppBaseEntity {
  /// Дата создания записи
  public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

  /// Дата обновления записи
  public DateTime? UpdatedAt { get; set; }

  /// Дата удаления записи
  [JsonIgnore]
  public DateTime? DeletedAt { get; set; }
}