# Простая форма
Простая форма с обработкой событий через контейнер

```
<!DOCTYPE html>
<html>
<head>
	<title>test form event</title>
</head>
<body>

<div id="form-container">
	<form action="#">
		<input type="text" name="mytext" required>
		<input type="submit" value="Submit">
		<br>
		<input type="radio" value="10" name="foo"> 10
		<input type="radio" value="20" name="foo"> 20
		<input type="radio" value="30" name="foo"> 30
		<input type="radio" value="qwe" name="bar"> qwe
		<input type="radio" value="asd" name="bar"> asd
	</form>
</div>

<script>
	
const myform = document.getElementById("form-container");
myform.addEventListener('submit', e => e.preventDefault());
myform.addEventListener('change', e => {
	e.preventDefault();
	console.log(e.target.value);
});

window.addEventListener('load', e => {
	console.log('on load');
});
window.addEventListener('unload', e => {
	console.log('on unload');
});

</script>
</body>
</html>
```