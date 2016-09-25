// ES6

/* README
	For the following modules 
	1) turn off Babel or code will be transpiled
	2) require modules
	3) npm run build:js and webpack-dev-server
	4) check console for 'es6' var
*/

// MODULES:
// let-const-blockScoping
// arrow-functions
// default-function-parameters
// rest-spread
// object-literal-extensions
// for-of-loops
// octal-binary-literals
// template-literals
// destructuring
// class
// symbols
// object-extensions
// string-extensions
// number extensions

// TEST:
var es6 = require('./number-extensions');
console.log(es6);


/* README
	For the following modules 
	1) turn on Babel as browser do not support es6 modules yet
	2) import modules
	3) npm run build:js and webpack-dev-server
	4) check console
*/

// MODULES:
// modules

// TEST:
// import es6 from './modules.js';
// console.log(es6);