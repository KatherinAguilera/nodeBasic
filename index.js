// (rquiere) : ruta del modulo que quiera importar
const math = require ("./math");
// no esta el directorio directamente pero de igual manera lo busca por defecto como index.js
const greet = require("./greetings");
const hello = require("./greetings/hello");
const numbers = require("./number");


//  var math . add function de math.js
console.log(math.add (4, 5));
console.log(math.divide (4, 5));
console.log(math.substract (4, 5));
console.log(math.multiply (4, 5));

// greet var.greet function de greetings/index.js
console.log (greet.greet("Kathy"));
console.log (hello.sayHello("Winny"));

console.log (numbers.primo(5));


