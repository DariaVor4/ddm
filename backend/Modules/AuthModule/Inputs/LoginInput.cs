namespace VisaCenterBackend.Modules.AuthModule; 

public class LoginInput {
  public string Email { get; set; } = null!;
  public string Password { get; set; } = null!;
}