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
    

// const readline = require('readline');

// readline.emitKeypressEvents(process.stdin);

// process.stdin.setRawMode(true);
// let count = 0;

// setInterval(() => {
//     console.log(count)
//     process.stdin.on('keypress', (str, key) => {
//         if (key.ctrl && key.name === 'c') {
//           process.exit();
//         } else {
//           console.log(`You pressed the "${str}" key`);
//           console.log();
//           count++
          
//           // console.log(key);
//           console.log();
//         }
//       }); 
   
// }, 1000);

// console.log('Press any key...');
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min
let alive = true;
let bulletSpot = random(1,6)
let turn =  random(1,6)

let player1 = 'Test';
let player2 = 'Jon';

while(alive){

    console.log(bulletSpot, turn);
    if(bulletSpot === turn){
        console.log(`${player1}'s brain covers the room..`);
        console.log(`${player2} wins!`);

        break     
    }else{
        console.log(`Its ${player2}'s turn to try their luck`)
        turn + 1 > 6 ? turn = 1 : turn++

        console.log(bulletSpot, turn);
        if(turn === bulletSpot){
            console.log(`${player2}'s brain spills out of their head..`)
            console.log(`${player1} wins!`);

            break;
        }else{
            turn + 1 > 6 ? turn = 1 : turn++
            console.log(`${player1} takes the gun and points it at their head..`)
        }
    }
}



