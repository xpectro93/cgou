const readline = require("readline-sync");
const Names = require('./Names.js');
const c = require('chalk');

class Human{
    constructor(name, sym, attributes) {
        this.name = name;
        this.sym = sym
        this.attributes = {...attributes};
        
    }
    getMove() {
        return readline.question(`${this.name}, what's your next move?`);
    }
    greet(someone = 'stranger'){
        return `Hello ${someone}, my name is ${this.name}.`
    }
    static randomCreate(int){
        let humans = [];
        for(let i = 0; i <= int; i++){
            console.log(Names[i])
        }
        return;
    }

}

let hu = new Human('Jon', {mood:'sad', willToLive:0, strength: null, int:'minimal' })
// console.log(hu.getMove())
let testMap = [['  ','  ','🌱',' '],['  ','  ','🌱',' '],['  ','  ','🌱',' ']];
testMap.forEach((row, i) => {
    console.log(c.green.bgGreen.bold(row.join(' ')))
})
console.log(c.green.bgGreen(['.',',',','], c.white.bgWhite(' ,') + '!'));
// console.log(c.green.bgGreen.bold())
// Human.randomCreate(20)

module.exports = Human;
// '🧟'
// '🧝'