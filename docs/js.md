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

