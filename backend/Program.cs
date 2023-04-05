using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using VisaCenterBackend.Shared.DB;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Подключение к БД
builder.Services.AddDbContext<AppDbContext>();

// Глобальная конфигурация JSON сериализации: игнорирование циклических ссылок
builder.Services.AddControllers().AddJsonOptions(options => {
  options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
});

// Добавление ролей
builder.Services.AddAuthorization(options => {
  options.AddPolicy("Admin", policy => policy.RequireRole("Admin"));
  options.AddPolicy("User", policy => policy.RequireRole("User"));
});

// Включение CORS
// TODO: Нужно разобраться, как это делать безопасно. Т.к. скорее всего здесь он включается для любого домена
builder.Services.AddCors(c => { c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()); });

// Подключение JWT аутентификации
// builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//   .AddJwtBearer(options => {
//     var accessTokenSecret = builder.Configuration.GetValue<string>("accessTokenSecret");
//     if (string.IsNullOrEmpty(accessTokenSecret))
//       throw new Exception("Не указан accessTokenSecret в конфигурации");
//     options.TokenValidationParameters = new TokenValidationParameters() {
//       IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(accessTokenSecret)),
//     };
//   });

var app = builder.Build();

// Enable CORS
// TODO: Нужно разобраться, как это делать безопасно. Т.к. скорее всего здесь он включается для любого домена
app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Получение данных
// TODO: нужно убрать это отсюда
app.MapGet(pattern: "/User", handler: (AppDbContext db) => db.User.ToList());
app.MapGet(pattern: "/NotificationToUser", handler: (AppDbContext db) => db.NotificationToUser.ToList());
app.MapGet(pattern: "/Notification", handler: (AppDbContext db) => db.Notification.ToList());

app.Run();