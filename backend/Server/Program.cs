using Microsoft.EntityFrameworkCore;
using Server;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// получаем строку подключения из файла конфигурации    
string connection = builder.Configuration.GetConnectionString("DefaultConnection")!;

// добавляем контекст ApplicationContext в качестве сервиса в приложение
builder.Services.AddDbContext<DB>(options => options.UseSqlServer(connection));

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/login";
        options.AccessDeniedPath = "/accessdenied";
    });


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// получение данных
app.MapGet("/User", (DB db) => db.User.ToList());
app.MapGet("/NotificationToUser", (DB db) => db.NotificationToUser.ToList());
app.MapGet("/Notification", (DB db) => db.Notification.ToList());
//var users = db.Users.Include(u => u.Company).ToList();

app.Run();



















/*
 SELECT *
FROM [User] AS [u]
INNER JOIN NotificationToUser AS [nu] ON [u].[Id] = [nu].[UserId]
INNER JOIN Notification AS [n] ON [n].[Id] = [nu].[NotificationId];
 */
