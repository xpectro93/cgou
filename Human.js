const readline = require("readline-sync");
const Names = require("./Names.js");
const Syms = require("./Syms.js");
const c = require("chalk");

const random = item => item[Math.floor(Math.random() * item.length)];
// '🔷'
// '🔸'
// '⚪'
// '🍒'

class Human {
    constructor(name, sym, attributes) {
        this.name = name;
        this.sym = sym;
        this.attributes = { ...attributes };
    }
    getMove() {
        return readline.question(`${this.name}, what's your next move?`);
    }
    greet(someone = "stranger") {
        return `Hello ${someone}, my name is ${this.name}.`;
    }
    static randomCreate(int) {
        let humans = [];

        for (let i = 0; i <= int; i++) {
            humans.push(new Human(random(Names), random(Syms)));
        }
        return humans;
    }
}

let hu = new Human("Jon", {
    mood: "sad",
    willToLive: 0,
    strength: null,
    int: "minimal"
});
// console.log(hu.getMove())
// let testMap = [['  ','  ','🌱',' '],['  ','  ','🌱',' '],['  ','  ','🌱',' ']];
// testMap.forEach((row, i) => {
//     console.log(c.green.bgGreen.bold(row.join(' ')))
// })
// console.log(c.green.bgGreen(['.',',',','], c.white.bgWhite(' ,') + '!'));
const scoreBoard = num => {
    let grid = [];
    for (let i = 0; i < 4; i++) {
        grid[i] = [];
        for(let j = 0; j < num; j++){
            grid[i][j] = ' ';
        };
        
    };
    return grid;

}
const map = num => {
    let grid = [];
    for (let j = 0; j <= num; j++) {
        grid.push([]);
        for (let i = 0; i <= num; i++) {
            if (j === 0) {
                grid[j].push("🔷");
            }else if(j === num){
                grid[j].push("🔷");
            }else if(i === 0) {
                grid[j][i] = "🔷"
            }else if(i === num) {
                grid[j][i] = "🔷";
            }else {
                grid[j][i] = " "
            }
        }
    }
    return grid;
};
let arr = map(28);
let score = scoreBoard(29);


// arr.forEach(row => console.log(c.green.bgGreen.bold(row.join(" "))));

let [row, col] = [1, 1];
let move = "d";
// c.green.bgGreen.bold(row.join(' '))
while(true){

// setInterval(()=>{
    

    ////////render
    //scoreBoard test;
    // score.forEach(row => console.log(c.bgBlack.bold(row.join(" "))));
    console.log(c.bgCyan.bold(row, col))
    arr.forEach(row => console.log(c.bgBlack.bold(row.join(" "))));
    //input move 
    move = readline.keyIn('[w]up,[a]left, [s]down, [d]right', {limit: 'wasd'})

    //check move
   if(move === 'w'){
     if(row - 1 >= 1){
            arr[row][col]=' '
            row--
            arr[row][col] = '😬'
     }
    }else if(move ==='a'){
       if(col - 1 >= 1){
            arr[row][col]=' '
            col--
            arr[row][col] = '😬'
       }
    }else if(move === 's'){
        if(row + 1 < arr.length - 1){
            arr[row][col]=' '
            row++
            arr[row][col] = '😬'
        }
    }else if(move === 'd'){
        if(col + 1 < arr.length - 1){
            arr[row][col]=' '
            col++
            arr[row][col] = '😬'
        }
    }
    console.clear();
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


