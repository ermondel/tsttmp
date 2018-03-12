# CSS


филдсет не работает флексом


фикс длинных слов, table: table-layout: fixed; overflow: hidden

фикс длинных слов, div: min-width: 0; word-wrap: break-word;


ie и edge не поддерживают justify-content: space-evenly
```
хак: justify-content: space-around; justify-content: space-evenly;
```


если у картинки не равны друг другу ширина и высота, то не будет работать скругление в мобильных браузерах


vertical aside slide-box
```
html { position: relative; min-height: 100%; }
#vertical-aside-slide-box {
	position: absolute; 
	top: 0; 
	bottom: 0; 
	left: 0; 
	width: 300px;
}
```

