# Простой сервер на node

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
var express = require('../nodejs/app/location/node_modules/express'), // путь к папке с модулями
    app = express();
app.use(express.static('.')); // вся текущая папка version-control
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
Enjoy