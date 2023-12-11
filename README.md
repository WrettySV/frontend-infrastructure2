# React + TypeScript + Vite

До этого дз можно сказать отсутсовал опыт использования бандлеров (только parcel в html-css дз). Я решила выбрать vite, 
так как он был представлен в лекции как инструмент следующего поколения для фронтенд-разработки.


Первые сложности возникли при отображении контента на странице GitHub Pages. Изначально, когда я развернула проект на 
GitHub Pages, обнаружилось, что некоторые ресурсы, такие как изображения и стили, 
не отображались. Для решения этой проблемы мне пришлось изменить 
конфигурацию файла vite.config.js, добавив корневой путь, относительно которого 
будут разрешаться ресурсы.


В ходе проекта я столкнулась с дополнительными сложностями при подборе 
совместимых зависимостей для линтеров, учитывая настройки hh конфигураций. 
В процессе настройки линтеров, мне пришлось изменить версии eslint и typescript, 
чтобы они соответствовали требованиям hh конфигов. 


Также столкнулась с проблемой загрузки hh конфигураций в проект. Не сразу я осознала, 
как именно их загрузить, но затем обнаружила, что существует публичный регистр 
пакетов, откуда можно загрузить необходимые конфигурации.
