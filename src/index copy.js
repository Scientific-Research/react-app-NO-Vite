class Person {
	constructor(name, doing) {
		this.name = name;
		this.doing = doing;
	}

	walk() {
		// console.log('Walk');
		console.log(`${this.name} is ${this.doing}`);
	}
}

class Teacher extends Person {
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

const Teacher1 = new Teacher('Ali', 'walking', 'M.S.C', 'English');
console.log(Teacher1);
Teacher1.walk();
Teacher1.teach();
