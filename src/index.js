const person = {
	name: 'Maximilian',
	walk() {},
	talk() {},
};

person.talk();
person.name = 'Bulibuli';

const targetMember = 'name';
person[targetMember.value] = 'John';
