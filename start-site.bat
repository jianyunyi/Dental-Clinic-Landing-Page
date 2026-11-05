@echo off
title Dental Clinic Landing Page Dev Server
cd /d "%~dp0"
echo ============================================================
echo Starting Dental Clinic Landing Page (Vite + React)
echo ============================================================
echo.
echo Opening browser to http://localhost:3000 ...
start http://localhost:3000
echo.
call pnpm run dev
if %errorlevel% neq 0 (
  echo pnpm failed, trying npx vite...
  call npx vite --port 3000
)
pause
