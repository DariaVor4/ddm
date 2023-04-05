@echo off

set /p MigrationName="MigrationName: "
echo Migration will be applied: Update_%MigrationName%
pause

dotnet ef migrations add %MigrationName%^
 && dotnet ef database update

pause
