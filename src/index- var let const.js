import ReactDOM from 'react-dom';

// const element = <h1>Hello World</h1>;
// console.log(element);

// ReactDOM.render(element, document.getElementById('root'));

// var => function
// let => Block
// const => Block

// let element = 0;
const sayHello = () => {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		// element = <h1>{i}</h1>;
		ReactDOM.render(i, document.getElementById('root'));
	}
};
sayHello();
