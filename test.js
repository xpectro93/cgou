// const rl = require("readline-sync");
// const c = require('chalk');
// const log = console;

// // log.log(c.blue.bgRed.bold('Hello world!'));

// // let animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
// //   index = rl.keyInSelect(animals, 'Which animal?');
// // log.log('Ok, ' + animals[index] + ' goes to your room.');
// let  command ='kappa'
// while (true) {
//     command = rl.question('hey whats this');
//     log.log(c.white.bgRed.bold('Hello world!'));
//     log.log(c.white.bgRed.bold(command))
// }

// // class Player {∏∏
// //     constructor(name){

// //     }
// // }
// console.log('test');
// const readline = require('readline');
// // console.log(readline)
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// setInterval(()=> {
//     rl.question('line', (answer) => {
//         //Log the answer in a database
//         console.log(`Thank you for your valuable feedback: ${answer}`);
      
//         // rl.close();
//       });
// },1750)
    

const readline = require('readline');

readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);
// require('events').EventEmitter.prototype._maxListeners = 100;
let count = 0;

//So the plan is to 'render' normally while this function listens to te keypresses.

    //setting the amount of listeners to a high amount, this might cause problems later, but F it.yolo, right? kappa123
    require('events').EventEmitter.defaultMaxListeners = 10000
    process.stdin.on('keypress', (str, key) => {


        if (key.ctrl && key.name === 'c') {
            process.exit();
        } else {
            setInterval(() => {
                console.log(`You pressed the "${str}" key`);
                count++
                console.log('this is count inside setInterval:', count)
                console.log('this is key name',key.name);
            }, 1000);
                
        }
        console.log('count inside stdin ',count);
    }); 
    console.log(`${count}`)

    

console.log('Press any key...');
/////////////////////////////////////////////////
// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// for(let i = 0; i < 11; i++) {
//   myEmitter.on('event', _ => console.log(i));
// }

// myEmitter.emit('event');


    
      
      






