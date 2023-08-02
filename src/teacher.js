import { Person } from './person';

export class Teacher extends Person {
	constructor(name, doing, degree, Lesson) {
		super(name, doing);
		this.degree = degree;
		this.Lesson = Lesson;
	}
	teach() {
		// console.log('teach');
		console.log(`, has ${this.degree} degree and teaches ${this.Lesson}`);
	}
}
