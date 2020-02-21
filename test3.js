// const Human = require('Human.js');
const c = require ('chalk');
const readline = require('readline');
const Board = require('./Board.js');
readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

class Render {
  constructor(refreshRate){
    this.stage = new Board();
    this.refreshRate = refreshRate;
  }
  //this is a callback that takes in the user input
  test(){
    // let [row, col] = [1 ,1]
    let input = {name:'d'};
    // let renderCount = 0;
    // let hs = 0;
    setInterval(() => {
      require('events').EventEmitter.defaultMaxListeners = 10000;
      
      process.stdin.on('keypress', (str, key) => {
        if(key.ctrl && key.name === 'c'){
          process.exit();
        }else{
          //key is object
          input = key
        }
      })
      //add render logic here
      //gameplay look executes once every render, or at least it should
      this.stage.makeMove(input.name)
      // test render
      // console.log (input.name, renderCount++);

    },this.refreshRate)
    console.clear()
  }
}
let newRender = new Render(250);
newRender.test();
// newRender.test(newRender.stage.makeMove)
// console.log(newRender)