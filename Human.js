const readline = require ('readline-sync');
const Names = require ('./Names.js');
const Syms = require ('./Syms.js');
const c = require ('chalk');

const random = item => item[Math.floor (Math.random () * item.length)];
// '🔷'
// '🔸'
// '⚪'
// '🍒'
//

class Human {
  constructor (name, sym, attributes) {
    this.name = name;
    this.sym = sym;
    this.attributes = {...attributes};
  }
  getMove () {
    return readline.question (`${this.name}, what's your next move?`);
  }

  greet (someone = 'stranger') {
    return `Hello ${someone}, my name is ${this.name}.`;
  }

  static randomCreate (int) {
    let humans = [];

    for (let i = 0; i <= int; i++) {
      humans.push (new Human (random (Names), random (Syms)));
    }
    return humans;
  }
}

const scoreBoard = num => {
  let grid = [];
  for (let i = 0; i < 4; i++) {
    grid[i] = [];
    for (let j = 0; j < num; j++) {
      grid[i][j] = ' ';
    }
  }
  return grid;
};

const map = num => {
  let grid = [];
  for (let j = 0; j <= num; j++) {
    grid.push ([]);
    for (let i = 0; i <= num; i++) {
      if (j === 0) {
        grid[j].push ('🔷');
      } else if (j === num) {
        grid[j].push ('🔷');
      } else if (i === 0) {
        grid[j][i] = '🔷';
      } else if (i === num) {
        grid[j][i] = '🔷';
      } else {
        grid[j][i] = ' ';
      }
    }
  }
  return grid;
};
// [y][x]
const fillTiles = array => {
  //line 1 
  array[1][13] = '🔷'
  array[1][14] = '🔷'
  //line 2
  array[2][2] = '🔷'
  array[2][3] = '🔷'
  array[2][4] = '🔷'
  array[2][5] = '🔷'
  array[2][7] = '🔷'
  array[2][8] = '🔷'
  array[2][9] = '🔷'
  array[2][10] = '🔷'
  array[2][11] = '🔷'
  array[2][13] = '🔷'
  array[2][14] = '🔷'
  array[2][16] = '🔷'
  array[2][17] = '🔷'
  array[2][18] = '🔷'
  array[2][19] = '🔷'
  array[2][20] = '🔷'
  array[2][22] = '🔷'
  array[2][23] = '🔷'
  array[2][24] = '🔷'
  array[2][25] = '🔷'
  //line 3
  array[3][2] = '🔷'
  array[3][5] = '🔷'
  array[3][7] = '🔷'
  array[3][11] = '🔷'
  array[3][13] = '🔷'
  array[3][14] = '🔷'
  array[3][16] = '🔷'
  array[3][20] = '🔷'
  array[3][22] = '🔷'
  array[3][25] = '🔷'
  //line 4
  array[4][2] = '🔷'
  array[4][3] = '🔷'
  array[4][4] = '🔷'
  array[4][5] = '🔷'
  array[4][7] = '🔷'
  array[4][8] = '🔷'
  array[4][9] = '🔷'
  array[4][10] = '🔷'
  array[4][11] = '🔷'
  array[4][13] = '🔷'
  array[4][14] = '🔷'
  array[4][16] = '🔷'
  array[4][17] = '🔷'
  array[4][18] = '🔷'
  array[4][19] = '🔷'
  array[4][20] = '🔷'
  array[4][22] = '🔷'
  array[4][23] = '🔷'
  array[4][24] = '🔷'
  array[4][25] = '🔷'
  //line 6
  array[6][2] = '🔷'
  array[6][3] = '🔷'
  array[6][4] = '🔷'
  array[6][5] = '🔷'
  array[6][7] = '🔷'
  array[6][8] = '🔷'
  array[6][10] = '🔷'
  array[6][11] = '🔷'
  array[6][12] = '🔷'
  array[6][13] = '🔷'
  array[6][14] = '🔷'
  array[6][15] = '🔷'
  array[6][16] = '🔷'
  array[6][17] = '🔷'
  array[6][19] = '🔷'
  array[6][20] = '🔷'
  array[6][22] = '🔷'
  array[6][23] = '🔷'
  array[6][24] = '🔷'
  array[6][25] = '🔷'
  //line 7
  array[7][2] = '🔷'
  array[7][3] = '🔷'
  array[7][4] = '🔷'
  array[7][5] = '🔷'
  array[7][7] = '🔷'
  array[7][8] = '🔷'
  array[7][10] = '🔷'
  array[7][11] = '🔷'
  array[7][12] = '🔷'
  array[7][13] = '🔷'
  array[7][14] = '🔷'
  array[7][15] = '🔷'
  array[7][16] = '🔷'
  array[7][17] = '🔷'
  array[7][19] = '🔷'
  array[7][20] = '🔷'
  array[7][22] = '🔷'
  array[7][23] = '🔷'
  array[7][24] = '🔷'
  array[7][25] = '🔷'
  //line 8
  array[8][7] = '🔷'
  array[8][8] = '🔷'
  array[8][13] = '🔷'
  array[8][14] = '🔷'
  array[8][19] = '🔷'
  array[8][20] = '🔷'
  //line 9
  array[9][0] = '🔷'
  array[9][1] = '🔷'
  array[9][2] = '🔷'
  array[9][3] = '🔷'
  array[9][4] = '🔷'
  array[9][5] = '🔷'
  array[9][7] = '🔷'
  array[9][8] = '🔷'
  array[9][9] = '🔷'
  array[9][10] = '🔷'
  array[9][11] = '🔷'
  array[9][13] = '🔷'
  array[9][14] = '🔷'
  array[9][16] = '🔷'
  array[9][17] = '🔷'
  array[9][18] = '🔷'
  array[9][19] = '🔷'
  array[9][20] = '🔷'
  array[9][22] = '🔷'
  array[9][23] = '🔷'
  array[9][24] = '🔷'
  array[9][25] = '🔷'
  array[9][26] = '🔷'
  array[9][27] = '🔷'
  //line 10
  array[10][0] = ' '
  array[10][5] = '🔷'
  array[10][7] = '🔷'
  array[10][8] = '🔷'
  array[10][9] = '🔷'
  array[10][10] = '🔷'
  array[10][11] = '🔷'
  array[10][13] = '🔷'
  array[10][14] = '🔷'
  array[10][16] = '🔷'
  array[10][17] = '🔷'
  array[10][18] = '🔷'
  array[10][19] = '🔷'
  array[10][20] = '🔷'
  array[10][22] = '🔷'
  array[10][27] = ' '
  //line 11
  array[11][0] = ' '
  array[11][5] = '🔷'
  array[11][7] = '🔷'
  array[11][8] = '🔷'
  array[11][19] = '🔷'
  array[11][20] = '🔷'
  array[11][22] = '🔷'
  array[11][27] = ' '
  //line 12
  array[12][0] = ' '
  array[12][5] = '🔷'
  array[12][7] = '🔷'
  array[12][8] = '🔷'
  array[12][10] = '🔷'
  array[12][11] = '🔷'
  array[12][12] = '🔷'
  array[12][15] = '🔷'
  array[12][16] = '🔷'
  array[12][17] = '🔷'
  array[12][19] = '🔷'
  array[12][20] = '🔷'
  array[12][22] = '🔷'
  array[12][27] = ' '
  //line 13
  array[13][0] = '🔷'
  array[13][1] = '🔷'
  array[13][2] = '🔷'
  array[13][3] = '🔷'
  array[13][4] = '🔷'
  array[13][5] = '🔷'
  array[13][7] = '🔷'
  array[13][8] = '🔷'
  array[13][10] = '🔷'
  array[13][17] = '🔷'
  array[13][19] = '🔷'
  array[13][20] = '🔷'
  array[13][22] = '🔷'
  array[13][23] = '🔷'
  array[13][24] = '🔷'
  array[13][25] = '🔷'
  array[13][26] = '🔷'
  array[13][27] = '🔷'
  //line 14
  array[14][0] = ' '
  array[14][10] = '🔷'
  array[14][17] = '🔷'
  array[14][27] = ' '
  //line 15
  array[15][0] = '🔷'
  array[15][1] = '🔷'
  array[15][2] = '🔷'
  array[15][3] = '🔷'
  array[15][4] = '🔷'
  array[15][5] = '🔷'
  array[15][7] = '🔷'
  array[15][8] = '🔷'
  array[15][10] = '🔷'
  array[15][17] = '🔷'
  array[15][19] = '🔷'
  array[15][20] = '🔷'
  array[15][22] = '🔷'
  array[15][23] = '🔷'
  array[15][24] = '🔷'
  array[15][25] = '🔷'
  array[15][26] = '🔷'
  array[15][27] = '🔷'
  //line 16
  array[16][0] = ' '
  array[16][5] = '🔷'
  array[16][7] = '🔷'
  array[16][8] = '🔷'
  array[16][10] = '🔷'
  array[16][11] = '🔷'
  array[16][12] = '🔷'
  array[16][13] = '🔷'
  array[16][14] = '🔷'
  array[16][15] = '🔷'
  array[16][16] = '🔷'
  array[16][17] = '🔷'
  array[16][19] = '🔷'
  array[16][20] = '🔷'
  array[16][22] = '🔷'
  array[16][27] = ' '
  //line 17
  array[17][0] = ' '
  array[17][5] = '🔷'
  array[17][7] = '🔷'
  array[17][8] = '🔷'
  array[17][19] = '🔷'
  array[17][20] = '🔷'
  array[17][22] = '🔷'
  array[17][27] = ' '
  //line 18
  array[18][0] = ' '
  array[18][5] = '🔷'
  array[18][7] = '🔷'
  array[18][8] = '🔷'
  array[18][10] = '🔷'
  array[18][11] = '🔷'
  array[18][12] = '🔷'
  array[18][13] = '🔷'
  array[18][14] = '🔷'
  array[18][15] = '🔷'
  array[18][16] = '🔷'
  array[18][17] = '🔷'
  array[18][19] = '🔷'
  array[18][20] = '🔷'
  array[18][22] = '🔷'
  array[18][27] = ' '
  //line 19
  array[19][0] = '🔷'
  array[19][1] = '🔷'
  array[19][2] = '🔷'
  array[19][3] = '🔷'
  array[19][4] = '🔷'
  array[19][5] = '🔷'
  array[19][7] = '🔷'
  array[19][8] = '🔷'
  array[19][10] = '🔷'
  array[19][11] = '🔷'
  array[19][12] = '🔷'
  array[19][13] = '🔷'
  array[19][14] = '🔷'
  array[19][15] = '🔷'
  array[19][16] = '🔷'
  array[19][17] = '🔷'
  array[19][19] = '🔷'
  array[19][20] = '🔷'
  array[19][22] = '🔷'
  array[19][23] = '🔷'
  array[19][24] = '🔷'
  array[19][25] = '🔷'
  array[19][26] = '🔷'
  array[19][27] = '🔷'
  


  return array
}
let arr = map (27);
arr = fillTiles(arr)

// let score = scoreBoard (29);

// arr.forEach(row => console.log(c.green.bgGreen.bold(row.join(" "))));

let [row, col] = [1, 1];
let move = 'd';
// c.green.bgGreen.bold(row.join(' '))
while (true) {
  // setInterval(()=>{

  ////////render
  //scoreBoard test;
  // score.forEach(row => console.log(c.bgBlack.bold(row.join(" "))));
  console.log (c.bgCyan.bold ('HIGHSCORE: ', row, col));
  arr.forEach (row => console.log (c.bgBlack.bold (row.join (' '))));
  //input move
  move = readline.keyIn ('[w]up,[a]left, [s]down, [d]right', {limit: 'wasdp'});
  if(move === 'p') process.exit()

  //check move
  if (move === 'w') {
    // if (row - 1 >= 1) {
    if(arr[row-1][col] !== '🔷'){
      arr[row][col] = ' ';
      row--;
      arr[row][col] = '😬';
    }
  } else if (move === 'a') {
    // if (col - 1 >= 1) {
    if(arr[row][col-1] !== '🔷'){
      arr[row][col] = ' ';
      col--;
      arr[row][col] = '😬';
    }
  } else if (move === 's') {
    if(arr[row+1][col] !== '🔷'){
    // if (row + 1 < arr.length - 1) {
      arr[row][col] = ' ';
      row++;
      arr[row][col] = '😬';
    }
  } else if (move === 'd') {
    if(arr[row][col + 1] !== '🔷'){
    // if (col + 1 < arr.length - 1) {
      arr[row][col] = ' ';
      col++;
      arr[row][col] = '😬';
    }
  }
  console.clear ();
  // }, 750);
}
// let count = 0

// while(true){

//     arr.forEach(row => console.log(row.join('🌱')))
//     console.log(row,col)
//     move = readline.keyIn('[w]up, [a]left, [s]down, [d]right', {limit: 'wasdc'})

//    if(move==='w'){
//      if(row - 1 >= 0){
//             arr[row][col]=' '
//             row--
//             arr[row][col] = '😬'
//      }
//     }else if(move ==='a'){
//        if(col - 1 >= 0){
//             arr[row][col]=' '
//             col--
//             arr[row][col] = '😬'
//        }
//     }else if(move === 's'){
//         if(row + 1 < arr.length){
//             arr[row][col]=' '
//             row++
//             arr[row][col] = '😬'
//         }
//     }else if(move === 'd'){
//         if(col + 1 < arr.length){
//             arr[row][col]=' '
//             col++
//             arr[row][col] = '😬'
//         }
//     }

//    console.clear()
// }

// console.log(c.green.bgGreen.bold())
// Human.randomCreate(20)
// console.log(Human.randomCreate(5))
module.exports = Human;
// '🧟'
// '🧝'



// Grid notes;
// 14 is mid point, maybe by starting at [-14, 0]