# JS Modules

Используем структуру из [parcel.md](parcel.md).


Рядом с index.html создаем папку src, а в ней два пустых файла myvars.js и myclass.js
```
.cache
package.json
index.html
index.js
src // <-- new folder
| myvars.js // <-- new empty js file
| myclass.js // <-- new empty js file
dist
```

открываем myvars.js и пишем
```
let one = 1;
let two = 2;

export {one, two};
```
открываем myclass.js и пишем (слово default позволяет не исп. фигурные скобки при експорте/импорте)
```
class Myclass {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

export default Myclass;
```
поднимаемся выше
```
.cache
package.json
index.html
index.js // <-- open this
src
| myvars.js
| myclass.js
dist
```
открываем index.js, и пишем
```
import {one, two} from './src/myvars';
import Myclass from './src/myclass';

let m = new Myclass('serg');

console.log('My name is', m.getName());
console.log(one, two);
```
запускам сборку и мини-сервер
```
parcel index.html
```
смотрим в браузере
```
http://localhost:1234/
```
