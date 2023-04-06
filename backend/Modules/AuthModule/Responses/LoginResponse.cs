using VisaCenterBackend.Shared.DB.Entities;

namespace VisaCenterBackend.Modules.AuthModule.Responses; 

public class LoginResponse {
  public UserEntity User { get; set; } = null!;
  public string AccessToken { get; set; } = null!;
}