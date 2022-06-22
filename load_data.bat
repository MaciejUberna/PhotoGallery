@echo off

set dir_start=src\assets\images
set filename=dirsloader.js

FOR /F "tokens=*" %%A IN ('DIR /B /S /A:D "%cd%\%dir_start%"') DO call :Firstdirloop %%A %filename%
goto :End

:Firstdirloop
    setlocal enableextensions enabledelayedexpansion
    set ctr=0;
    FOR /F "tokens=*" %%B IN ('DIR /B /A:D "%1"') DO (
        set /a ctr+=1
    )
    IF %ctr% GTR 0 (
        @REM ECHO const dirs = [ ^> %1\%2
        ECHO const dirs = [ > %1\%2
        set curr_item=0;
        FOR /F "tokens=*" %%C IN ('DIR /B /A:D "%1"') DO (
            set /a curr_item+=1
            call :MultipleItemsWrite %1 %%C %2 %ctr% !curr_item!
        )
        @REM ECHO ]; ^>^> %1\%2
        ECHO ]; >> %1\%2
        @REM ECHO export default dirs; ^>^> %1\%2
        ECHO export default dirs; >> %1\%2
    )
    endlocal
goto :eof

:MultipleItemsWrite
    SET lastdir=%~nx2
    IF %5 EQU %4 (
        @REM ECHO %lastdir% ^>^> %1\%3
        ECHO %lastdir% >> %1\%3
    ) ELSE (
        @REM ECHO %lastdir%, ^>^> %1\%3
        ECHO %lastdir%, >> %1\%3
    )
goto :eof

:End
ECHO Data updated successfuly!