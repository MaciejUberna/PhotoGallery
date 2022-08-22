@echo off

set dir_start=src\assets\images
set dir_index=dirsloader.js
set graphic_index=imageloader.js

FOR /F "tokens=*" %%A IN ('DIR /B /S /A:D "%cd%\%dir_start%"') DO call :Firstdirloop %%A %dir_index%
goto :End

:Firstdirloop
    setlocal enableextensions enabledelayedexpansion
	call :1Graphics %1 %graphic_index%" 
	
    set ctr=0;
    FOR /F "tokens=*" %%B IN ('DIR /B /A:D "%1"') DO (
        set /a ctr+=1
    )
    IF %ctr% GTR 0 (
        ECHO const dirs = [ > %1\%2
        set curr_item=0
        FOR /F "tokens=*" %%C IN ('DIR /B /A:D "%1"') DO (
            set /a curr_item+=1
            call :SecondDirloop %1 %%C %2 %ctr% !curr_item!
        )
        ECHO ]; >> %1\%2
        ECHO export default dirs; >> %1\%2
    )
    endlocal
goto :eof

:SecondDirloop
    SET lastdir=%~nx2
    IF %5 EQU %4 (
        @REM ECHO %lastdir% ^>^> %1\%3
        ECHO '%lastdir%' >> %1\%3
    ) ELSE (
        @REM ECHO %lastdir%, ^>^> %1\%3
        ECHO '%lastdir%', >> %1\%3
    )
goto :eof

:1Graphics
    set g="%1\*.jpg" "%1\*.png" "%1\*.jpeg" "%1\*.gif" "%1\*.webp" "%1\*.bmp" "%1\*.apng" "%1\*.ico"
	setlocal enableextensions enabledelayedexpansion
			set ctr=0
			FOR /F "tokens=*" %%D IN ('DIR %g% /B /A:-D') DO (
				set /a ctr+=1
			)
            set curr=0
			IF %ctr% GTR 0 (
				ECHO const graphics = [ > %1\%2
				FOR /F "tokens=*" %%E IN ('DIR %g% /B /A:-D') DO (
                    set /a curr+=1
				    IF %ctr% EQU !curr! (
						ECHO '%%E' >> %1\%2
					) ELSE (
						ECHO '%%E', >> %1\%2
					)
				)
				ECHO ]; >> %1\%2
				ECHO export default graphics; >> %1\%2
			) ELSE (
                DEL /Q /F %1\%2
            )
	endlocal
goto :eof

:GraphicIndexCleanup
    DEL /Q /F %1\%2
    ECHO Unnecessery graphical index cleaned!
goto :eof

:End
ECHO Data indexed successfuly!
ECHO -----------------------------
ECHO Dane pomy�lnie zaindeksowane!