@echo off
title LUMINA Dental & Aesthetics Studio Dev Server
cd /d "%~dp0"
echo ============================================================
echo Starting LUMINA Dental & Aesthetics Studio (Vite + React)
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
