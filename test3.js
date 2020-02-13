// const Human = require('Human.js');
const c = require ('chalk');
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

class Render {
  constructor(refresh){
    this.stage = this.map(27);
    this.refresh = refresh;
  }

  test(callback){
    // let [row, col] = [1 ,1]
    let input = {name:null};
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
      callback()

      // test render
      // console.log (input.name, renderCount++);





    },this.refresh)
  }
}
let newRender = new Render(1000)
newRender.test()
// console.log(newRender)