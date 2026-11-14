@echo off
title VELORA Luxury Fashion - Development Server
echo Starting VELORA luxury fashion server on http://localhost:3000 ...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
