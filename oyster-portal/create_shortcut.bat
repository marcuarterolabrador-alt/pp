@echo off
setlocal enabledelayedexpansion

:: 1. SETTINGS (Edit these to customize the shortcut name, port, and icon)
:: If left empty, they will be auto-detected based on the project.
set "APP_NAME=Connemara Oyster Restoration Portal"
set "PORT=4173"
set "ICON_RELATIVE_PATH=public\favicon.svg"
set "SHORTCUT_NAME="

:: 2. DETECT MODE
:: If run with --serve, it starts the web server.
:: Otherwise, it creates the shortcut.
if "%1"=="--serve" goto :SERVE

:: 3. RESOLVE SETTINGS
:: Get the current folder name for fallback
for %%I in ("%~dp0.") do set "FOLDER_NAME=%%~nxI"

:: Resolve APP_NAME (defaults to folder name if empty)
if "%APP_NAME%"=="" set "APP_NAME=%FOLDER_NAME%"

:: Resolve PORT (defaults to 1709 if empty)
if "%PORT%"=="" set "PORT=8080"

:: Resolve SHORTCUT_FILE (name of the .lnk file, defaults to APP_NAME.lnk)
if "%SHORTCUT_NAME%"=="" (
    set "SHORTCUT_FILE=%APP_NAME%.lnk"
) else (
    set "SHORTCUT_FILE=%SHORTCUT_NAME%"
)
:: Ensure shortcut file ends with .lnk extension
if not "%SHORTCUT_FILE:~-4%"==".lnk" set "SHORTCUT_FILE=%SHORTCUT_FILE%.lnk"

:: Resolve Paths
set "CURRENT_DIR=%~dp0"
if "%CURRENT_DIR:~-1%"=="\" set "CURRENT_DIR=%CURRENT_DIR:~0,-1%"

set "SHORTCUT_PATH=%CURRENT_DIR%\%SHORTCUT_FILE%"
set "SCRIPT_PATH=%~f0"

:: Resolve Icon Path
set "ICON_PATH="
if not "%ICON_RELATIVE_PATH%"=="" (
    if exist "%CURRENT_DIR%\%ICON_RELATIVE_PATH%" (
        set "ICON_PATH=%CURRENT_DIR%\%ICON_RELATIVE_PATH%"
    )
)
:: Fallback auto-detection if no valid custom icon path was provided
if not exist "%ICON_PATH%" (
    if exist "%CURRENT_DIR%\public\favicon.ico" (
        set "ICON_PATH=%CURRENT_DIR%\public\favicon.ico"
    ) else if exist "%CURRENT_DIR%\favicon.ico" (
        set "ICON_PATH=%CURRENT_DIR%\favicon.ico"
    ) else (
        :: Search recursively for any .ico file in assets, images, logo, or logos folders
        for /r "%CURRENT_DIR%" %%F in (*.ico) do (
            if not defined ICON_PATH (
                set "TEMP_PATH=%%~dpF"

                :: Skip common build, dependency, and tool folders to avoid wrong icons and slow down
                set "SKIP="
                if not "!TEMP_PATH:\node_modules\=!"=="!TEMP_PATH!" set "SKIP=1"
                if not "!TEMP_PATH:\.git\=!"=="!TEMP_PATH!" set "SKIP=1"
                if not "!TEMP_PATH:\.next\=!"=="!TEMP_PATH!" set "SKIP=1"
                if not "!TEMP_PATH:\.astro\=!"=="!TEMP_PATH!" set "SKIP=1"
                if not "!TEMP_PATH:\dist\=!"=="!TEMP_PATH!" set "SKIP=1"

                if not defined SKIP (
                    set "MATCH="
                    if not "!TEMP_PATH:\images\=!"=="!TEMP_PATH!" set "MATCH=1"
                    if not "!TEMP_PATH:\logo\=!"=="!TEMP_PATH!" set "MATCH=1"
                    if not "!TEMP_PATH:\logos\=!"=="!TEMP_PATH!" set "MATCH=1"
                    if not "!TEMP_PATH:\assets\=!"=="!TEMP_PATH!" set "MATCH=1"

                    if defined MATCH (
                        set "ICON_PATH=%%F"
                    )
                )
            )
        )
    )
)

:: 4. CREATE MODE
echo.
echo ========================================================
echo  Localhost Shortcut Creator
echo ========================================================
echo.
echo Project Folder: %FOLDER_NAME%
echo Application:    %APP_NAME%
echo Creating shortcut: %SHORTCUT_FILE%...
if defined ICON_PATH (
    echo Using icon: %ICON_PATH%
) else (
    echo No favicon found, using default shortcut icon.
)

:: Create the shortcut pointing back to this script with the --serve flag
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ws = New-Object -ComObject WScript.Shell; $s = $ws.CreateShortcut('%SHORTCUT_PATH%'); $s.TargetPath = '%SCRIPT_PATH%'; $s.Arguments = '--serve'; $s.WorkingDirectory = '%CURRENT_DIR%'; if ('%ICON_PATH%' -ne '') { $s.IconLocation = '%ICON_PATH%' }; $s.Description = 'Start %APP_NAME% Local Server'; $s.Save()"

echo.
echo ========================================================
echo  SUCCESS!
echo.
echo  1. The '%SHORTCUT_FILE%' shortcut has been created.
echo  2. Use that shortcut to launch the site.
echo.
echo ========================================================
echo.
pause
exit /b

:SERVE
:: SERVER LOGIC
:: Get the current folder name for fallback if settings aren't set in sub-context
for %%I in ("%~dp0.") do set "FOLDER_NAME=%%~nxI"
if "%APP_NAME%"=="" set "APP_NAME=%FOLDER_NAME%"
if "%PORT%"=="" set "PORT=1709"

title %APP_NAME% Local Server
cd /d "%~dp0"

echo.
echo ========================================================
echo  %APP_NAME% Local Server
echo ========================================================
echo.

set "BUILD_DIR="

:: Check if package.json exists (Node project)
if exist "package.json" (
    :: It's a Node project. Check if dependencies are installed
    if not exist "node_modules\" (
        echo [!] 'node_modules' folder not found. Installing dependencies...
        call npm install
        if !errorlevel! neq 0 (
            echo.
            echo Error: Failed to install dependencies. Ensure Node.js and npm are installed.
            pause
            exit /b 1
        )
    )

    :: Detect standard build folders
    if exist "dist\" (
        set "BUILD_DIR=dist"
    ) else if exist "build\" (
        set "BUILD_DIR=build"
    ) else if exist "out\" (
        set "BUILD_DIR=out"
    ) else if exist ".next\" (
        set "BUILD_DIR=.next"
    ) else if exist ".output\public\" (
        set "BUILD_DIR=.output\public"
    ) else if exist "public\index.html" (
        set "BUILD_DIR=public"
    )

    :: If no build folder exists, build it
    if "!BUILD_DIR!"=="" (
        echo [!] No build folder found. Building project...
        call npm run build
        if !errorlevel! neq 0 (
            echo.
            echo Error: Failed to build the project.
            pause
            exit /b 1
        )

        :: Recheck build folder after running build
        if exist "dist\" (
            set "BUILD_DIR=dist"
        ) else if exist "build\" (
            set "BUILD_DIR=build"
        ) else if exist "out\" (
            set "BUILD_DIR=out"
        ) else if exist ".next\" (
            set "BUILD_DIR=.next"
        ) else if exist ".output\public\" (
            set "BUILD_DIR=.output\public"
        ) else if exist "public\index.html" (
            set "BUILD_DIR=public"
        )
    )
)

:: If still not set, check if root index.html exists (simple static site)
if "!BUILD_DIR!"=="" (
    if exist "index.html" (
        set "BUILD_DIR=."
    )
)

:: Error out if no build directory or index.html detected
if "!BUILD_DIR!"=="" (
    echo.
    echo Error: Could not detect any build directory or index.html in root.
    echo Ensure the project is built or has a static entry point.
    pause
    exit /b 1
)

echo Detected build folder: !BUILD_DIR!
echo.
echo Starting local web server...

:: Open browser immediately
start "" "http://localhost:%PORT%"

:: Adapt to the build folder type
if "!BUILD_DIR!"==".next" (
    :: Next.js SSR production server
    call npx next start -p %PORT%
) else (
    :: Standard static file server
    call npx -y serve -p %PORT% "!BUILD_DIR!"
)

if %errorlevel% neq 0 (
    echo.
    echo Error: Failed to start the server. Ensure port %PORT% is free and Node.js is installed.
    pause
)
