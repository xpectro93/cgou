let readlineSync = require('readline-sync')

const random = (min, max) =>
  Math.floor (Math.random () * (max - min + 1)) + min;
let alive = true;
let bulletIndex = random (1, 6);
let playerTurn = random (1, 6);

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
  // console.log (bulletIndex, playerTurn);
  if (bulletIndex === playerTurn) {
    console.log (`${player1}'s brain covers the room..`);
    console.log (`${player2} wins!`);

    break;
  } else {
    console.log (`Its ${player2}'s playerTurn to try their luck`);
    readlineSync.keyIn(`Ready, ${player2}`,{limit: ' '});
    playerTurn + 1 > 6 ? (playerTurn = 1) : playerTurn++;

    // console.log (bulletIndex, playerTurn);
    if (playerTurn === bulletIndex) {
      console.log (`${player2}'s brain spills out of their head..`);
      console.log (`${player1} wins!`);

      break;
    } else {
      playerTurn + 1 > 6 ? (playerTurn = 1) : playerTurn++;
      console.log (`${player1} takes the gun and points it at their head..`);
      readlineSync.keyIn(`Ready?, ${player1}?`,{limit: ' '});
    }
  }
}


