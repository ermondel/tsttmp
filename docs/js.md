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
