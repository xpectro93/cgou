let readlineSync = require('readline-sync')

const random = (min, max) =>
  Math.floor (Math.random () * (max - min + 1)) + min;
let alive = true;
let bulletSpot = random (1, 6);
let turn = random (1, 6);

// let person = readlineSync.question(`What is your name?`});
// let person2 = 'JonA';


// const flip  = () => {
//   if(random(1,2) === 1){
//      player1 = person
//      player2 = person2
//     }else{
//      player1 = person2
//      player2 = person
//     }

// }
// let player1 = 'Jhenya'
// let player2 = "Jon"



while (alive) {
  // console.log (bulletSpot, turn);
  if (bulletSpot === turn) {
    console.log (`${player1}'s brain covers the room..`);
    console.log (`${player2} wins!`);

    break;
  } else {
    console.log (`Its ${player2}'s turn to try their luck`);
    readlineSync.keyIn(`Ready, ${player2}`,{limit: ' '});
    turn + 1 > 6 ? (turn = 1) : turn++;

    // console.log (bulletSpot, turn);
    if (turn === bulletSpot) {
      console.log (`${player2}'s brain spills out of their head..`);
      console.log (`${player1} wins!`);

      break;
    } else {
      turn + 1 > 6 ? (turn = 1) : turn++;
      console.log (`${player1} takes the gun and points it at their head..`);
      readlineSync.keyIn(`Ready?, ${player1}?`,{limit: ' '});
    }
  }
}


