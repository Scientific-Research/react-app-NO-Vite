const person = {
	name: 'Mosh',
	walk() {
		console.log(this);
		this.name = 'Ali';
	},
};

person.walk();
const walk = person.walk;
console.log(walk);
console.log(walk());
