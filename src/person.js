export class Person {
	constructor(name, doing) {
		this.name = name;
		this.doing = doing;
	}

	walk() {
		// console.log('Walk');
		console.log(`${this.name} is ${this.doing}`);
	}
}
