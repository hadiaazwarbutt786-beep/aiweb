@echo off
title Push VELORA Website to GitHub
cd /d "%~dp0"
echo ========================================================
echo  Pushing VELORA Website to https://github.com/tabvwrk-glitch/aiweb.git
echo ========================================================
echo.
git push -u origin main
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ----------------------------------------------------
    echo If GitHub asks for authentication, you can use:
    echo 1. Sign in with your browser (Git Credential Manager)
    echo 2. Or enter your GitHub Personal Access Token (PAT) as password.
    echo ----------------------------------------------------
) else (
    echo.
    echo ========================================================
    echo  SUCCESS! Website pushed to GitHub successfully!
    echo  Live Link (after enabling GitHub Pages):
    echo  https://tabvwrk-glitch.github.io/aiweb/
    echo ========================================================
)
echo.
pause
