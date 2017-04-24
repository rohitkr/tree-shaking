
// import './styles/style.css';

import { sayHello, getObject } from './module';

const element = document.createElement('h1');

element.innerHTML = sayHello('World');

document.body.appendChild(element);  

document.writeln(JSON.stringify(getObject('name', 'lName'), 0 , 4));