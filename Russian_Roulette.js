const random = (min, max) =>
  Math.floor (Math.random () * (max - min + 1)) + min;
let alive = true;
let bulletSpot = random (1, 6);
let turn = random (1, 6);

let player1 = 'Test';
let player2 = 'Jon';

while (alive) {
  console.log (bulletSpot, turn);
  if (bulletSpot === turn) {
    console.log (`${player1}'s brain covers the room..`);
    console.log (`${player2} wins!`);

    break;
  } else {
    console.log (`Its ${player2}'s turn to try their luck`);
    turn + 1 > 6 ? (turn = 1) : turn++;

    console.log (bulletSpot, turn);
    if (turn === bulletSpot) {
      console.log (`${player2}'s brain spills out of their head..`);
      console.log (`${player1} wins!`);

      break;
    } else {
      turn + 1 > 6 ? (turn = 1) : turn++;
      console.log (`${player1} takes the gun and points it at their head..`);
    }
  }
}
