@echo off
cls
docker-compose -f docker-compose.db.yml down -t 2

rd /s /q "mssql_data/"
7z x "db_data.7z"

pause
