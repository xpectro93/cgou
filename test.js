const rl = require("readline-sync");
const c = require('chalk');
const log = console;

// log.log(c.blue.bgRed.bold('Hello world!'));

// let animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   index = rl.keyInSelect(animals, 'Which animal?');
// log.log('Ok, ' + animals[index] + ' goes to your room.');
let  command ='kappa'
while (true) {
    command = rl.question('hey whats this');
    log.log(c.white.bgRed.bold('Hello world!'));
    log.log(c.white.bgRed.bold(command))
}

// class Player {
//     constructor(name){

//     }
// }
