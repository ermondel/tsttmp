#Parcel

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


На что обратить внимание:
* parcel все прогоняет через Babel, PostCSS, PostHTML
* parcel на выходе рядом с index.html создаст папку dist, в которой сидят наш index.html и test-parcel.js
* index.html внутри с `<script src="./index.js"></script>` поменяется на `<script src="/dist/test-parcel.js"></script>`
* test-parcel.js это собраный файл, в котором все в одном сидят наши все скрипты в одном и прогнанные через Babel
