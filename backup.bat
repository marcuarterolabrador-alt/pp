@echo off
setlocal enabledelayedexpansion

:: Create .backup folder if it doesn't exist
if not exist .backup mkdir .backup

:: Get timestamp in YYYYMMDDhhmmss format using PowerShell (locale-independent)
for /f "usebackq tokens=*" %%i in (`powershell -NoProfile -Command "Get-Date -Format 'yyyyMMddHHmmss'"`) do set "timestamp=%%i"

set "ZIP_FILE=.backup\!timestamp!.zip"

echo [Backup System] Gathering files for archiving...

:: Loop through all files and directories in the current folder, including hidden ones, and build the list of items to include
set "ITEMS_TO_ZIP="
for /f "delims=" %%a in ('dir /b /a') do (
    set "item=%%a"
    set "exclude=0"
    if /i "!item!" equ ".git" set "exclude=1"
    if /i "!item!" equ ".backup" set "exclude=1"
    if /i "!item!" equ ".claude" set "exclude=1"
    
    if "!exclude!" equ "0" (
        set "ITEMS_TO_ZIP=!ITEMS_TO_ZIP! "%%a""
    )
)

echo [Backup System] Archiving project to !ZIP_FILE!...

:: Run tar to create the zip file, excluding unnecessary and large folders
tar -c -a -f "!ZIP_FILE!" --exclude="node_modules" --exclude="dist" --exclude="dist-ssr" !ITEMS_TO_ZIP!

if %errorlevel% equ 0 (
    echo [Backup System] Backup completed successfully: !ZIP_FILE!
) else (
    echo [Backup System] Error: Backup failed with exit code %errorlevel%.
)

:: Pause for 3 seconds so the user can see the result if they double-clicked it
ping 127.0.0.1 -n 4 >nul
