# Простой сервер на node плюс json

требования
* установленный где-нибудь в системе node
* папка с модулями для node
* установленный модуль express
* типичная папка version-control c git проектами и подобным

про все выше см. ссылки
* [my begginer guide](https://proglib.io/p/beginners-guide-to-node-js/)

предположим что папка с модулями такая
```
C:\Users\NeonPC\nodejs\app\location\node_modules
```
папка version-control
```
C:\Users\NeonPC\version-control
```
идем в version-control, создаем там в корне js файл (например node.server.js), пишем в него
```
var express = require('../nodejs/app/location/node_modules/express');  // путь к модулю express
var options = {
	setHeaders: function (res, path, stat) {
		res.set('Access-Control-Allow-Origin', '*'); // обязательный заголовок для ответов json api
	},
};

app = express();
app.use(express.static('.', options));
app.listen(8080);
```
запускаем сервер
```
node node.server.js
```
открываем в браузере
```
http://localhost:8080/
```
видим вот такое, потому что нету index.html в корне
```
Cannot GET /
```
открываем любую под-папку с проектом, например
```
http://localhost:8080/course-collaboration-travel-plans/
```
остановим сервер, сделаем структуру папок для отладки запросов по json api с других приложений
```
tsttmp
| - myjson
| | - weather-app
| | | - daily.json
```
запускаем сервер, открываем путь в итоге увидим json ответ
```
http://localhost:8080/tsttmp/myjson/weather-app/daily.json
```
json ответ можно использовать из другого приложения, даже из запущенного parcel 
(ибо теперь оба сервера хоть и запущенны одновременно, но слушают разные порты).
```
http://localhost:1234/
```
