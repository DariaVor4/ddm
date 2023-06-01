@echo off
cls
docker-compose -f docker-compose.db.yml down -t 2

del /s /q "db_data.7z"
7z a -t7z "db_data.7z" -m0=lzma2 -mx=9 "pg_data/"

pause
