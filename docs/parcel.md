# Parcel

ссылки
* [getting started](https://parceljs.org/getting_started.html)
* [habrahabr](https://habrahabr.ru/post/344486/)

установим parcel
```
npm install -g parcel-bundler
```
в version-control создаем папку проекта, например test-parcel
```
cd test-parcel
```
создаем самый базовый файл package.json
```
npm init -y
```
в ней делаем два тестовых файла, первый index.html
```
<!DOCTYPE html>
<html>
<head>
	<title>test-parcel</title>
</head>
<body>
<script src="./index.js"></script>
</body>
</html>
```
второй index.js (будет служить точкой входа).
```
console.log("this is test-parcel");
```
запускаем parcel (или уже ерезапускаем), он при этом и поупаковывает все и еще и свой мини-сервер запустит
```
parcel index.html
```
смотрим в браузере
```
http://localhost:1234/
```
что-нибудь меняем в наших тестовых файлах:
```
<!DOCTYPE html>
<html>
<head>
	<title>test-parcel</title>
</head>
<body>

<p>One</p>
<p>Two</p>

<script src="./index.js"></script>
</body>
</html>
```
и
```
console.log("this is test-parcel");
const myconst = 'constanta';
console.log(myconst);
```
пару секунд ждем, parcel сам разберется и пересоберет (или F5), смотрим снова
```
http://localhost:1234/
```
можно еще что-нибудь поменять.

### Публикация
Простой запуск parcel index.html приводит только к временной публикации, доступной по:
```
localhost:1234
```
Если же нужно выложить на гит-хаб и опубликовать демо, то нужно:

1) Создать файл .gitignore, куда добавить
```
.cache
dist
```
2) потом проект собрать уже нормально (не временно) командой
```
parcel build index.html --no-minify --public-url ./
```
или
```
parcel build ./src/index.html --no-minify --public-url ./
```
3) создаем локально у себя ветку gh-pages (на которой будем держать собраный опубликованый проект)
```
git branch gh-pages
git checkout gh-pages
```
* удаляем все лишнее;
* оставляем только папку .git и в корне все файлы из папки dist;
* делаем коммит, например c описанием "build <метка времени unix>";
```
git commit -m "build 1522062314"
```
4) после чего пушим эту ветку на сервер
```
git push origin gh-pages
```
5) идем на гитхабе в настройки своего репозитория: 
```
Settings -> GitHub Pages
```
меняем в выпадающем списке Source с мастер на 
```
gh-pages
```
и сохраняем изменения; 

6) у себя переключаемся обратно на основную ветку master
```
git checkout master
```
и пушим ее на сервер, если нужно.


На что обратить внимание:
* parcel все прогоняет через Babel, PostCSS, PostHTML;
* parcel на выходе рядом с index.html создаст папку dist, в которой сидят наш index.html и test-parcel.js;
* index.html внутри с `<script src="./index.js"></script>` поменяется на `<script src="/dist/test-parcel.js"></script>`;
* test-parcel.js это собраный файл, в котором все в одном сидят наши все скрипты в одном и прогнанные через Babel;
* --no-minify команда чтобы не минимифицировать пока код;
* --public-url ./ команда ставит корень сборки как / (а не /dist/ по умолчанию из-за чего стили не подключаются);