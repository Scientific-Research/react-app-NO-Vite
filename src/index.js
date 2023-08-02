const person = {
	name: 'Maximilian',
	walk() {
		console.log(this);
		this.name = 'Ali';
	},
};

person.walk();

// const walk = person.walk.bind(person);
//const walk = person.walk();
// walk();
const walk = person.walk.bind(person);
walk();
