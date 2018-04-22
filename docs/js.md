# JS

1) Date.now() не делает локальную поправку на +2 UTC.

2) Событие focusin -- нужно использовать вместо focus когда вешаем обработчик не на саму форму а на контейнер, ибо focus  не bubling.

3) Проверка indexOf на true/false
```
!!(favorites.indexOf(city)+1);

```
4) Приведение к Integer
```
parseInt(b[key]*1);
```
5) Вот такая вот штука c headers 
```
new Headers().append('Content-type', 'application/json')
```
для fetch, она *НЕ* работает. 
Вместо headers будет undefined. 
Нужно хидеры *отдельной* переменной делать. 

6) При работе с картинками (fetch, canvas и т.д.) может возникать ошибка CORS. Исправление: поставить аттрибут картинке crossOrigin в 'anonymous'.
```
image.crossOrigin = 'anonymous';
```
7) Может возникать ошибка 502 (и т.п) при работе с fetch. Причина: опечатка в значении content-type или вообще его нет.
```
headers.append('content-type', 'application/json');
headers.append('content-type', 'multipart/form-data');
```
8) При работе с formData **не обязательно** указывать 
```
Content-Type: multipart/form-data 
```
в headers. Он его сам установит при присваиванни в body фетча.
```
{
	method: 'POST',
	headers,
	body: formData,
}
```
9) Ошибка tainted canvas при экспорте в blob канваса при перезагрузке страницы с canvas. 
Возникает если грузить картинки на канвас с другого сервера, после чего нажать F5 например. Картинки загрузятся с кеша брузера после чего, после вызова toBlob вылетит ошибка tainted canvas. Причина именно в загрузке картинок из кеша браузера, и его можно отключить путем присвоения src однопиксельной картинки в формате base64, а потом уже обычного пути к картинке на сервере. Код функции загрузки картинок (**последовательность кода в этой функции важна**, ```image.src=path``` должна быть после каллбеков, а после нее проверка на ```image.complete```).
```
export const loadImage = (name, path) => {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.crossOrigin = 'anonymous';
		image.onload = () => resolve({name, image});
		image.onerror = (e) => reject(e);
		image.src = path;
		if (image.complete || image.complete === undefined ) {
			image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
			image.src = path;
		}
	});
};
```