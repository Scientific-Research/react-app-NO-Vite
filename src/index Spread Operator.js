const first = [1, 2, 3];
const second = [4, 5, 6];
const person = {
	name: 'Max',
	age: 20,
};

// combine these two arrays together:
const combined = [...first, 'a', 'b', ...second, 'c'];
console.log(combined);

const combined2 = first.concat(second);
console.log(combined2);

const c2 = [...first];
console.log(c2);

const oClone = { ...person };
console.log(oClone);

const third = { name: 'Mosh' };
const forth = { job: 'Instructor' };

// const combinedObj = third.concat(forth);  it seems that concat doesn't work for Objects and only works for Arrays.
// console.log(combinedObj);

const combinedObj = { ...third, ...forth, location: 'Australia' };
console.log(combinedObj);

const combineObjClone = { ...combinedObj };
console.log(combineObjClone);
