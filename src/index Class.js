// const person = {
// 	name: 'Mosh',
// 	// walk() {
// 	// 	console.log('Walk');
// 	// },
// };

// const person2 = {
// 	name: 'Mosh',
// 	walk() {
// 		console.log('Walk');
// 	},
// };

class Person {
	// name = 'Mosh';
	constructor(name, doing) {
		this.name = name;
		this.doing = doing;
	}
	walk() {
		// console.log('Walk');
		console.log(`He/She is ${this.doing}`);
	}
}

const person1 = new Person('Mosh', 'running');
console.log(person1);
person1.walk();
const person2 = new Person('Max', 'Walking');
console.log(person2);
person2.walk();
// console.log(person);
// console.log(person.name);
// console.log(person.walk);
