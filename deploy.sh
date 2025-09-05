#!/bin/bash

# GitHub Pages Deployment Script for djonikage/pcmaster2
# Этот скрипт поможет быстро задеплоить проект на GitHub Pages

echo "🚀 GitHub Pages Deployment for djonikage/pcmaster2"
echo "============================================="

# Проверяем, инициализирован ли git
if [ ! -d ".git" ]; then
    echo "📝 Инициализируем Git репозиторий..."
    git init
fi

# Добавляем все файлы
echo "📁 Добавляем файлы..."
git add .

# Создаём коммит
echo "💾 Создаём коммит..."
git commit -m "Deploy: готов к публикации на GitHub Pages"

# Проверяем, есть ли remote origin
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🌐 Настраиваем remote origin для pcmaster2..."
    git remote add origin https://github.com/djonikage/pcmaster2.git
    echo "✅ Remote origin настроен: https://github.com/djonikage/pcmaster2.git"
    echo "🌍 После push ваш сайт будет доступен по адресу:"
    echo "   https://djonikage.github.io/pcmaster2/"
fi

# Загружаем на GitHub
echo "🚀 Загружаем на GitHub..."
git push -u origin main

echo ""
echo "✅ Готово!"
echo "📋 Следующие шаги:"
echo "1. Перейдите в Settings вашего репозитория на GitHub"
echo "2. Найдите раздел 'Pages'"
echo "3. В 'Source' выберите 'GitHub Actions'"
echo "4. Ваш сайт автоматически опубликуется через несколько минут"
echo ""
echo "🌍 Ваш сайт будет доступен по адресу: https://djonikage.github.io/pcmaster2/"