@echo off
chcp 65001 > nul
echo 🚀 GitHub Pages Deployment for djonikage/pcmaster2
echo =============================================
echo.

REM Проверяем, инициализирован ли git
if not exist ".git" (
    echo 📝 Инициализируем Git репозиторий...
    git init
)

REM Добавляем все файлы
echo 📁 Добавляем файлы...
git add .

REM Создаём коммит
echo 💾 Создаём коммит...
git commit -m "Deploy: готов к публикации на GitHub Pages"

REM Проверяем, есть ли remote origin
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 🌐 Настраиваем remote origin для pcmaster2...
    git remote add origin https://github.com/djonikage/pcmaster2.git
    echo ✅ Remote origin настроен: https://github.com/djonikage/pcmaster2.git
    echo 🌍 После push ваш сайт будет доступен по адресу:
    echo    https://djonikage.github.io/pcmaster2/
)

REM Загружаем на GitHub
echo 🚀 Загружаем на GitHub...
git push -u origin main

echo.
echo ✅ Готово!
echo 📋 Следующие шаги:
echo 1. Перейдите в Settings вашего репозитория на GitHub
echo 2. Найдите раздел 'Pages'
echo 3. В 'Source' выберите 'GitHub Actions'
echo 4. Ваш сайт автоматически опубликуется через несколько минут
echo.
echo 🌍 Ваш сайт будет доступен по адресу: https://djonikage.github.io/pcmaster2/
pause