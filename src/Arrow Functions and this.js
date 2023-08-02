const person = {
	name: 'AAA',
	talk() {
		setTimeout(function () {
			console.log('this', this);
			this.name = 'Ahmed';
		}, 1000);
	},
};

person.talk();

// const talk = person.talk;
// const talk = person.talk.bind(person);

// talk();
// the above object works with function but 'this' returns an Window Object. When we are using the Arrow function like below Object,
// 'this' returns person1 Object and not Window Object.
const person1 = {
	name: 'AAA',
	talk() {
		setTimeout(() => {
			console.log('this', this);
			this.name = 'Ahmed';
		}, 1000);
	},
};

person1.talk();
