# JS Class

```
class Big {
	constructor(a = 1, b = 2, c = 3) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	getAll() {
		return this.a + ' ' + this.b + ' ' + this.c;
	}
}

class Small extends Big {
	constructor(a = 11, b = 22, c = 33, d = 44) {
		super(a, b, c);
		this.d = d;
	}

	getD() {
		return this.d;
	}
}

let myclass = new Small(111, 222, 333, 444);
console.log(myclass.getAll());
console.log(myclass.getD());
```
