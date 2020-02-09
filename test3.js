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
  map(num){
    let grid = [];
    for (let j = 0; j <= num + 3; j++) {
      grid.push ([]);
      for (let i = 0; i <= num; i++) {
        if (j === 0) {
          grid[j].push ('🔷');
        } else if (j === num + 3) {
          grid[j].push ('🔷');
        } else if (i === 0) {
          grid[j][i] = '🔷';
        } else if (i === num) {
          grid[j][i] = '🔷';
        } else {
          grid[j][i] = '⚆';
        }
      }
    }
    this.stage = this.fillTiles(grid);
    return this.stage;
  }
  fillTiles(array) {
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
    //line 20
    array[20][13] = '🔷'
    array[20][14] = '🔷'
    //line 21
    array[21][2] = '🔷'
    array[21][3] = '🔷'
    array[21][4] = '🔷'
    array[21][5] = '🔷'
    array[21][7] = '🔷'
    array[21][8] = '🔷'
    array[21][9] = '🔷'
    array[21][10] = '🔷'
    array[21][11] = '🔷'
    array[21][13] = '🔷'
    array[21][14] = '🔷'
    array[21][16] = '🔷'
    array[21][17] = '🔷'
    array[21][18] = '🔷'
    array[21][19] = '🔷'
    array[21][20] = '🔷'
    array[21][22] = '🔷'
    array[21][23] = '🔷'
    array[21][24] = '🔷'
    array[21][25] = '🔷'
    //line 22
    array[22][2] = '🔷'
    array[22][3] = '🔷'
    array[22][4] = '🔷'
    array[22][5] = '🔷'
    array[22][7] = '🔷'
    array[22][8] = '🔷'
    array[22][9] = '🔷'
    array[22][10] = '🔷'
    array[22][11] = '🔷'
    array[22][13] = '🔷'
    array[22][14] = '🔷'
    array[22][16] = '🔷'
    array[22][17] = '🔷'
    array[22][18] = '🔷'
    array[22][19] = '🔷'
    array[22][20] = '🔷'
    array[22][22] = '🔷'
    array[22][23] = '🔷'
    array[22][24] = '🔷'
    array[22][25] = '🔷'
    //line 23
    array[23][4] = '🔷'
    array[23][5] = '🔷'
    array[23][22] = '🔷'
    array[23][23] = '🔷'
    //line 24
    array[24][1] = '🔷'
    array[24][2] = '🔷'
    array[24][4] = '🔷'
    array[24][5] = '🔷'
    array[24][7] = '🔷'
    array[24][8] = '🔷'
    array[24][10] = '🔷'
    array[24][11] = '🔷'
    array[24][12] = '🔷'
    array[24][13] = '🔷'
    array[24][14] = '🔷'
    array[24][15] = '🔷'
    array[24][16] = '🔷'
    array[24][17] = '🔷'
    array[24][19] = '🔷'
    array[24][20] = '🔷'
    array[24][22] = '🔷'
    array[24][23] = '🔷'
    array[24][25] = '🔷'
    array[24][26] = '🔷'
    //line 25
    array[25][1] = '🔷'
    array[25][2] = '🔷'
    array[25][4] = '🔷'
    array[25][5] = '🔷'
    array[25][7] = '🔷'
    array[25][8] = '🔷'
    array[25][10] = '🔷'
    array[25][11] = '🔷'
    array[25][12] = '🔷'
    array[25][13] = '🔷'
    array[25][14] = '🔷'
    array[25][15] = '🔷'
    array[25][16] = '🔷'
    array[25][17] = '🔷'
    array[25][19] = '🔷'
    array[25][20] = '🔷'
    array[25][22] = '🔷'
    array[25][23] = '🔷'
    array[25][25] = '🔷'
    array[25][26] = '🔷'
    //line 26
    array[26][7] = '🔷'
    array[26][8] = '🔷'
    array[26][13] = '🔷'
    array[26][14] = '🔷'
    array[26][19] = '🔷'
    array[26][20] = '🔷'
    //line 27
    array[27][2] = '🔷'
    array[27][3] = '🔷'
    array[27][4] = '🔷'
    array[27][5] = '🔷'
    array[27][6] = '🔷'
    array[27][7] = '🔷'
    array[27][8] = '🔷'
    array[27][9] = '🔷'
    array[27][10] = '🔷'
    array[27][11] = '🔷'
    array[27][13] = '🔷'
    array[27][14] = '🔷'
    array[27][16] = '🔷'
    array[27][17] = '🔷'
    array[27][18] = '🔷'
    array[27][19] = '🔷'
    array[27][20] = '🔷'
    array[27][21] = '🔷'
    array[27][22] = '🔷'
    array[27][23] = '🔷'
    array[27][24] = '🔷'
    array[27][25] = '🔷'
    // line 28
    array[28][2] = '🔷'
    array[28][3] = '🔷'
    array[28][4] = '🔷'
    array[28][5] = '🔷'
    array[28][6] = '🔷'
    array[28][7] = '🔷'
    array[28][8] = '🔷'
    array[28][9] = '🔷'
    array[28][10] = '🔷'
    array[28][11] = '🔷'
    array[28][13] = '🔷'
    array[28][14] = '🔷'
    array[28][16] = '🔷'
    array[28][17] = '🔷'
    array[28][18] = '🔷'
    array[28][19] = '🔷'
    array[28][20] = '🔷'
    array[28][21] = '🔷'
    array[28][22] = '🔷'
    array[28][23] = '🔷'
    array[28][24] = '🔷'
    array[28][25] = '🔷'
    array[1][1] = '😬'
    
  
    this.stage = array
    return this.stage
  }
  test(){
    let [row, col] = [1 ,1]
    let input = {name:null};
    let renderCount = 0;
    let hs = 0;
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
      this.stage.forEach(row => console.log
      (c.bgBlack.bold (row.join (' '))))
      
      if (input.name === 'w') {
        // if (row - 1 >= 1) {
        if(this.stage[row-1][col] !== '🔷'){
          if(this.stage[row-1][col] === '⚆') hs+=10
          this.stage[row][col] = ' ';
          row--;
          this.stage[row][col] = '😬';
        }
      } else if (input.name === 'a') {
        // if (col - 1 >= 1) {
        if(this.stage[row][col-1] !== '🔷'){
          if(this.stage[row][col-1] === '⚆') hs+=10
          this.stage[row][col] = ' ';
          col--;
          this.stage[row][col] = '😬';
        }
      } else if (input.name === 's') {
        if(this.stage[row+1][col] !== '🔷'){
          if(this.stage[row+1][col] === '⚆') hs+=10
        // if (row + 1 < this.stage.length - 1) {
          this.stage[row][col] = ' ';
          row++;
          this.stage[row][col] = '😬';
        }
      } else if (input.name === 'd') {
        if(this.stage[row][col + 1] !== '🔷'){
          if(this.stage[row][col+1] === '⚆') hs+=10
        // if (col + 1 < this.stage.length - 1) {
          this.stage[row][col] = ' ';
          col++;
          this.stage[row][col] = '😬';
        }
      }
      console.log (input.name, renderCount++);





    },this.refresh)
  }
}
let newRender = new Render(1000)
newRender.test()
// console.log(newRender)