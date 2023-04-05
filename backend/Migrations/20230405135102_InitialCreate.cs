using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace VisaCenterBackend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ConfirmationEmailEntity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConfirmationEmailEntity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ConfirmationPhoneEntity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConfirmationPhoneEntity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NotificationEntity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotificationEntity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StudentArrivalNoticeEntity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Profession = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Expires = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InvitingSide = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReceivingSide = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentArrivalNoticeEntity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StudentMigrationCardEntity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Series = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Number = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IssueDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ExpirationDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentMigrationCardEntity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StudentPassportEntity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Patronymic = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BirthDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    BirthPlace = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Citizenship = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Series = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Number = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IssueDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IssuedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExpirationDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentPassportEntity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StudentVisaEntity",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    BlankSeries = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Number = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IssueDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ExpirationDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    InvitationNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentVisaEntity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserEntity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsLoggedIn = table.Column<bool>(type: "bit", nullable: false),
                    LastActivity = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserEntity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeEntity",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Patronymic = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsAdmin = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeEntity", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_EmployeeEntity_UserEntity_UserId",
                        column: x => x.UserId,
                        principalTable: "UserEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "NotificationToUser",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NotificationId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsRead = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotificationToUser", x => new { x.UserId, x.NotificationId });
                    table.ForeignKey(
                        name: "FK_NotificationToUser_NotificationEntity_NotificationId",
                        column: x => x.NotificationId,
                        principalTable: "NotificationEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NotificationToUser_UserEntity_UserId",
                        column: x => x.UserId,
                        principalTable: "UserEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "StudentEntity",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ArrivalNoticeId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MigrationCardId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    VisaId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PassportId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Curator = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Faculty = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Course = table.Column<int>(type: "int", nullable: true),
                    Group = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentEntity", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_StudentEntity_StudentArrivalNoticeEntity_ArrivalNoticeId",
                        column: x => x.ArrivalNoticeId,
                        principalTable: "StudentArrivalNoticeEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_StudentEntity_StudentMigrationCardEntity_MigrationCardId",
                        column: x => x.MigrationCardId,
                        principalTable: "StudentMigrationCardEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_StudentEntity_StudentPassportEntity_PassportId",
                        column: x => x.PassportId,
                        principalTable: "StudentPassportEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_StudentEntity_StudentVisaEntity_VisaId",
                        column: x => x.VisaId,
                        principalTable: "StudentVisaEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_StudentEntity_UserEntity_UserId",
                        column: x => x.UserId,
                        principalTable: "UserEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "StudentCloseRelativeEntity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    StudentId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Patronymic = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BirthDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Citizenship = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AddressContinuousResidence = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentCloseRelativeEntity", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StudentCloseRelativeEntity_StudentEntity_StudentId",
                        column: x => x.StudentId,
                        principalTable: "StudentEntity",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "StudentVisaRequestEntity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    StudentId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    EmployeeComment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RegistrationNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Category = table.Column<int>(type: "int", nullable: true),
                    Multiplicity = table.Column<int>(type: "int", nullable: true),
                    Reason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AddressOfMigrationRegistration = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EstimatedRouteOfStay = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AddressInCountryOfContinuousResidence = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PlaceOfWorkOrStudyAndEmploymentPosition = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RussianFederationRelatives = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AttachedDocuments = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentVisaRequestEntity", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StudentVisaRequestEntity_StudentEntity_StudentId",
                        column: x => x.StudentId,
                        principalTable: "StudentEntity",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "NotificationEntity",
                columns: new[] { "Id", "Content", "CreatedAt", "DeletedAt", "Title", "UpdatedAt" },
                values: new object[,]
                {
                    { new Guid("1f80e04f-7ccd-4384-bcd2-2e8ae526e1de"), "Тут текст сообщения 3", new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Сообщение 3", null },
                    { new Guid("5503d2c8-9de3-4a18-89e0-0d5458df3c4e"), "Тут текст сообщения 2", new DateTime(2023, 3, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Сообщение 2", null },
                    { new Guid("7c3644fd-af32-4efb-bf9a-b62f27bcf487"), "Тут текст сообщения 1", new DateTime(2023, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "Сообщение 1", null }
                });

            migrationBuilder.InsertData(
                table: "UserEntity",
                columns: new[] { "Id", "CreatedAt", "DeletedAt", "Email", "IsLoggedIn", "LastActivity", "Password", "UpdatedAt" },
                values: new object[,]
                {
                    { new Guid("341f9502-5b87-488f-a0f8-e676d389eafb"), new DateTime(2023, 4, 5, 13, 51, 2, 755, DateTimeKind.Utc).AddTicks(4504), null, "student@mail.ru", false, null, "123321", null },
                    { new Guid("70271e9c-2862-4802-86b7-b4c3a40f9225"), new DateTime(2023, 4, 5, 13, 51, 2, 755, DateTimeKind.Utc).AddTicks(4501), null, "employee@mail.ru", false, null, "321", null },
                    { new Guid("83dbaba4-b9c4-4962-9dab-4d35271f311f"), new DateTime(2023, 4, 5, 13, 51, 2, 755, DateTimeKind.Utc).AddTicks(4438), null, "admin@mail.ru", false, null, "123", null }
                });

            migrationBuilder.InsertData(
                table: "EmployeeEntity",
                columns: new[] { "UserId", "CreatedAt", "DeletedAt", "FirstName", "IsAdmin", "LastName", "Patronymic", "UpdatedAt" },
                values: new object[,]
                {
                    { new Guid("70271e9c-2862-4802-86b7-b4c3a40f9225"), new DateTime(2023, 4, 5, 13, 51, 2, 755, DateTimeKind.Utc).AddTicks(4768), null, "Петр", false, "Петров", null, null },
                    { new Guid("83dbaba4-b9c4-4962-9dab-4d35271f311f"), new DateTime(2023, 4, 5, 13, 51, 2, 755, DateTimeKind.Utc).AddTicks(4765), null, "Иван", true, "Иванов", null, null }
                });

            migrationBuilder.InsertData(
                table: "NotificationToUser",
                columns: new[] { "NotificationId", "UserId", "CreatedAt", "DeletedAt", "IsRead", "UpdatedAt" },
                values: new object[,]
                {
                    { new Guid("7c3644fd-af32-4efb-bf9a-b62f27bcf487"), new Guid("70271e9c-2862-4802-86b7-b4c3a40f9225"), new DateTime(2023, 4, 5, 13, 51, 2, 755, DateTimeKind.Utc).AddTicks(4830), null, false, null },
                    { new Guid("1f80e04f-7ccd-4384-bcd2-2e8ae526e1de"), new Guid("83dbaba4-b9c4-4962-9dab-4d35271f311f"), new DateTime(2023, 4, 5, 13, 51, 2, 755, DateTimeKind.Utc).AddTicks(4833), null, true, null },
                    { new Guid("5503d2c8-9de3-4a18-89e0-0d5458df3c4e"), new Guid("83dbaba4-b9c4-4962-9dab-4d35271f311f"), new DateTime(2023, 4, 5, 13, 51, 2, 755, DateTimeKind.Utc).AddTicks(4832), null, true, null },
                    { new Guid("7c3644fd-af32-4efb-bf9a-b62f27bcf487"), new Guid("83dbaba4-b9c4-4962-9dab-4d35271f311f"), new DateTime(2023, 4, 5, 13, 51, 2, 755, DateTimeKind.Utc).AddTicks(4827), null, false, null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_NotificationToUser_NotificationId",
                table: "NotificationToUser",
                column: "NotificationId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentCloseRelativeEntity_StudentId",
                table: "StudentCloseRelativeEntity",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentEntity_ArrivalNoticeId",
                table: "StudentEntity",
                column: "ArrivalNoticeId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_StudentEntity_MigrationCardId",
                table: "StudentEntity",
                column: "MigrationCardId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_StudentEntity_PassportId",
                table: "StudentEntity",
                column: "PassportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_StudentEntity_VisaId",
                table: "StudentEntity",
                column: "VisaId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_StudentVisaRequestEntity_StudentId",
                table: "StudentVisaRequestEntity",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_UserEntity_Email",
                table: "UserEntity",
                column: "Email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ConfirmationEmailEntity");

            migrationBuilder.DropTable(
                name: "ConfirmationPhoneEntity");

            migrationBuilder.DropTable(
                name: "EmployeeEntity");

            migrationBuilder.DropTable(
                name: "NotificationToUser");

            migrationBuilder.DropTable(
                name: "StudentCloseRelativeEntity");

            migrationBuilder.DropTable(
                name: "StudentVisaRequestEntity");

            migrationBuilder.DropTable(
                name: "NotificationEntity");

            migrationBuilder.DropTable(
                name: "StudentEntity");

            migrationBuilder.DropTable(
                name: "StudentArrivalNoticeEntity");

            migrationBuilder.DropTable(
                name: "StudentMigrationCardEntity");

            migrationBuilder.DropTable(
                name: "StudentPassportEntity");

            migrationBuilder.DropTable(
                name: "StudentVisaEntity");

            migrationBuilder.DropTable(
                name: "UserEntity");
        }
    }
}
