namespace VisaCenterBackend.Shared;

public class AppConfigService {
  public readonly string AccessTokenSecret;
  public readonly ulong AccessTokenExpires;
  public readonly string RefreshTokenSecret;
  public readonly ulong RefreshTokenExpires;
  public readonly string DefaultConnection;

  public AppConfigService(IConfiguration appConfig) {
    List<string> errors = new();

    AccessTokenSecret = appConfig.GetValue<string>("accessTokenSecret")!;
    if (string.IsNullOrEmpty(AccessTokenSecret))
      errors.Add("Не указан accessTokenSecret в конфигурации");

    AccessTokenExpires = appConfig.GetValue<ulong>("accessTokenExpires");
    if (AccessTokenExpires == 0)
      errors.Add("Не указан accessTokenExpires в конфигурации");

    RefreshTokenSecret = appConfig.GetValue<string>("refreshTokenSecret")!;
    if (string.IsNullOrEmpty(RefreshTokenSecret))
      errors.Add("Не указан refreshTokenSecret в конфигурации");

    RefreshTokenExpires = appConfig.GetValue<ulong>("refreshTokenExpires");
    if (RefreshTokenExpires == 0)
      errors.Add("Не указан refreshTokenExpires в конфигурации");

    DefaultConnection = appConfig.GetConnectionString("DefaultConnection")!;
    if (string.IsNullOrEmpty(DefaultConnection))
      errors.Add("Не указана строка подключения к БД в конфигурации");

    if (errors.Count > 0) throw new Exception(string.Join("\r\n", errors));
  }
}