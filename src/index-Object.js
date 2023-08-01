const person = {
	name: 'Maximilian',
	walk() {},
	talk() {},
};

person.talk();
const fistname = (person.name = 'Bulibuli');

console.log(fistname);

const targetMember = 'name';
person[targetMember.valueOf] = 'John';
console.log(person);
