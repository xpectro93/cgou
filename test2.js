// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', (event) => {
//   console.log(event);
// });
// myEmitter.emit('event');

let m = 0;
let x = 0;
//this gets executed when the function below is called on the setInterval's callback function.
//emitter name should be the same ex:myEmmiter.on('apple') and same on myEmmiter.emit('apple)
// myEmitter.on(`x`, () => {
//   console.log(`m: ${++m}, x: ${++x}`);
// });
// console.log(myEmitter)

// setInterval(()=> { 
//    myEmitter.emit('x');
// },1000)

// Prints: 1
// myEmitter.emit('apple');
// Prints: 2