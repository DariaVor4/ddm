using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using Server.Entities;

namespace Server
{
    public class DB : DbContext
    {
        public DbSet<UserEntity> User { get; set; } = null!;
        public DbSet<NotificationToUser> NotificationToUser { get; set; } = null!;
        public DbSet<NotificationEntity> Notification { get; set; } = null!;

        public DB(DbContextOptions<DB> options)
            : base(options)
        {
            // создаем базу данных при первом обращении
            // Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /// Models Configuration ///

            modelBuilder.ApplyConfiguration(new ConfirmationEmailEntityConfiguration());
            modelBuilder.ApplyConfiguration(new ConfirmationPhoneEntityConfiguration());
            modelBuilder.ApplyConfiguration(new EmployeeEntityConfiguration());
            modelBuilder.ApplyConfiguration(new NotificationEntityConfiguration());
            modelBuilder.ApplyConfiguration(new NotificationToUserConfiguration());
            modelBuilder.ApplyConfiguration(new StudentArrivalNoticeEntityConfiguration());
            modelBuilder.ApplyConfiguration(new StudentCloseRelativeEntityConfiguration());
            modelBuilder.ApplyConfiguration(new StudentEntityConfiguration());
            modelBuilder.ApplyConfiguration(new StudentMigrationCardEntityConfiguration());

            modelBuilder.ApplyConfiguration(new UserEntityConfiguration());

            /// Seeds ///
            
            UserEntity User1 = new UserEntity { Id = Guid.NewGuid(), Email = "Atheist_new@mail.ru", Password = "root", IsLoggedIn = true, LastActivity = new DateTime(2023, 4, 2) };
            UserEntity User2 = new UserEntity { Id = Guid.NewGuid(), Email = "uchhaa@mail.ru", Password = "123123123", IsLoggedIn = false, LastActivity = new DateTime(2022, 9, 1) };
            
            NotificationEntity Notification1 = new NotificationEntity { Id = Guid.NewGuid(), Title = "Сообщение 1", Content = "Тут текст сообщения 1", CreatedAt = new DateTime(2023, 4, 2) };
            NotificationEntity Notification2 = new NotificationEntity { Id = Guid.NewGuid(), Title = "Сообщение 2", Content = "Тут текст сообщения 2", CreatedAt = new DateTime(2023, 3, 14) };
            NotificationEntity Notification3 = new NotificationEntity { Id = Guid.NewGuid(), Title = "Сообщение 3", Content = "Тут текст сообщения 3", CreatedAt = new DateTime(2023, 1, 1) };
            modelBuilder.Entity<UserEntity>().HasData(User1, User2);
            modelBuilder.Entity<NotificationEntity>().HasData(Notification1, Notification2, Notification3);
            modelBuilder.Entity<NotificationToUser>().HasData(
                    new NotificationToUser { UserId = User1.Id, NotificationId = Notification1.Id, IsRead = false },
                    new NotificationToUser { UserId = User2.Id, NotificationId = Notification1.Id, IsRead = false },
                    new NotificationToUser { UserId = User1.Id, NotificationId = Notification2.Id, IsRead = true },
                    new NotificationToUser { UserId = User1.Id, NotificationId = Notification3.Id, IsRead = true }
            );
        }

        public override int SaveChanges()
        {
            // Update the UpdatedAt property to now()
            ChangeTracker.DetectChanges();
            foreach (var entry in ChangeTracker.Entries())
                if (entry.State == EntityState.Modified && entry.Properties.Any(p => p.Metadata.Name == "UpdatedAt"))
                    entry.Property("UpdatedAt").CurrentValue = DateTime.UtcNow;
            return base.SaveChanges();
        }
    }
}
