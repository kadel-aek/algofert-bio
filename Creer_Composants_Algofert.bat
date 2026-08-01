@echo off
setlocal

title Creation des composants ALGOFERT-BIO
color 0A

echo ============================================
echo   CREATION DES COMPOSANTS ALGOFERT-BIO
echo ============================================
echo.

cd /d "%~dp0"

if not exist "components" (
    mkdir "components"
)

call :createFile "components\Navbar.tsx"
call :createFile "components\Hero.tsx"
call :createFile "components\Technology.tsx"
call :createFile "components\ProblemSolution.tsx"
call :createFile "components\FieldTrials.tsx"
call :createFile "components\VisualEvidence.tsx"
call :createFile "components\Benefits.tsx"
call :createFile "components\Results.tsx"
call :createFile "components\Formulations.tsx"
call :createFile "components\Products.tsx"
call :createFile "components\Team.tsx"
call :createFile "components\Innovation.tsx"
call :createFile "components\ContactSection.tsx"
call :createFile "components\Footer.tsx"

echo.
echo ============================================
echo   VERIFICATION DES FICHIERS EXISTANTS
echo ============================================
echo.

if exist "components\ContactForm.tsx" (
    echo [OK] components\ContactForm.tsx existe deja.
) else (
    echo [ATTENTION] ContactForm.tsx est absent.
    echo Il n'a pas ete cree pour eviter de perdre le formulaire fonctionnel.
)

echo.
echo ============================================
echo   OPERATION TERMINEE
echo ============================================
echo.
echo Aucun fichier existant n'a ete ecrase.
echo Les nouveaux fichiers sont dans :
echo %CD%\components
echo.
pause
exit /b

:createFile
if exist "%~1" (
    echo [CONSERVE] %~1
) else (
    type nul > "%~1"
    echo [CREE]     %~1
)
exit /b