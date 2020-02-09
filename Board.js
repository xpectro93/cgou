const c = require('chalk');
class Board {
  constructor () {
    this.grid = this.createBoard(27);
    this.points = 0;
    this.moveOptions =[[-1,0],[0,-1],[1,0],[0,1]];
  }
  createBoard (num) {
    let outline = []
    for (let j = 0; j <= num + 3; j++) {
      outline.push ([]);
      for (let i = 0; i <= num; i++) {
        if (j === 0) {
          outline[j].push ('🔷');
        } else if (j === num + 3) {
          outline[j].push ('🔷');
        } else if (i === 0) {
          outline[j][i] = '🔷';
        } else if (i === num) {
          outline[j][i] = '🔷';
        } else {
          outline[j][i] = '⚆';
        }
      }
    }
    this.grid = outline 
    return this.fillTiles(this.grid);
  }
  fillTiles() {
    //line 1 
    this.grid[1][13] = '🔷'
    this.grid[1][14] = '🔷'
    //line 2
    this.grid[2][2] = '🔷'
    this.grid[2][3] = '🔷'
    this.grid[2][4] = '🔷'
    this.grid[2][5] = '🔷'
    this.grid[2][7] = '🔷'
    this.grid[2][8] = '🔷'
    this.grid[2][9] = '🔷'
    this.grid[2][10] = '🔷'
    this.grid[2][11] = '🔷'
    this.grid[2][13] = '🔷'
    this.grid[2][14] = '🔷'
    this.grid[2][16] = '🔷'
    this.grid[2][17] = '🔷'
    this.grid[2][18] = '🔷'
    this.grid[2][19] = '🔷'
    this.grid[2][20] = '🔷'
    this.grid[2][22] = '🔷'
    this.grid[2][23] = '🔷'
    this.grid[2][24] = '🔷'
    this.grid[2][25] = '🔷'
    //line 3
    this.grid[3][2] = '🔷'
    this.grid[3][5] = '🔷'
    this.grid[3][7] = '🔷'
    this.grid[3][11] = '🔷'
    this.grid[3][13] = '🔷'
    this.grid[3][14] = '🔷'
    this.grid[3][16] = '🔷'
    this.grid[3][20] = '🔷'
    this.grid[3][22] = '🔷'
    this.grid[3][25] = '🔷'
    //line 4
    this.grid[4][2] = '🔷'
    this.grid[4][3] = '🔷'
    this.grid[4][4] = '🔷'
    this.grid[4][5] = '🔷'
    this.grid[4][7] = '🔷'
    this.grid[4][8] = '🔷'
    this.grid[4][9] = '🔷'
    this.grid[4][10] = '🔷'
    this.grid[4][11] = '🔷'
    this.grid[4][13] = '🔷'
    this.grid[4][14] = '🔷'
    this.grid[4][16] = '🔷'
    this.grid[4][17] = '🔷'
    this.grid[4][18] = '🔷'
    this.grid[4][19] = '🔷'
    this.grid[4][20] = '🔷'
    this.grid[4][22] = '🔷'
    this.grid[4][23] = '🔷'
    this.grid[4][24] = '🔷'
    this.grid[4][25] = '🔷'
    //line 6
    this.grid[6][2] = '🔷'
    this.grid[6][3] = '🔷'
    this.grid[6][4] = '🔷'
    this.grid[6][5] = '🔷'
    this.grid[6][7] = '🔷'
    this.grid[6][8] = '🔷'
    this.grid[6][10] = '🔷'
    this.grid[6][11] = '🔷'
    this.grid[6][12] = '🔷'
    this.grid[6][13] = '🔷'
    this.grid[6][14] = '🔷'
    this.grid[6][15] = '🔷'
    this.grid[6][16] = '🔷'
    this.grid[6][17] = '🔷'
    this.grid[6][19] = '🔷'
    this.grid[6][20] = '🔷'
    this.grid[6][22] = '🔷'
    this.grid[6][23] = '🔷'
    this.grid[6][24] = '🔷'
    this.grid[6][25] = '🔷'
    //line 7
    this.grid[7][2] = '🔷'
    this.grid[7][3] = '🔷'
    this.grid[7][4] = '🔷'
    this.grid[7][5] = '🔷'
    this.grid[7][7] = '🔷'
    this.grid[7][8] = '🔷'
    this.grid[7][10] = '🔷'
    this.grid[7][11] = '🔷'
    this.grid[7][12] = '🔷'
    this.grid[7][13] = '🔷'
    this.grid[7][14] = '🔷'
    this.grid[7][15] = '🔷'
    this.grid[7][16] = '🔷'
    this.grid[7][17] = '🔷'
    this.grid[7][19] = '🔷'
    this.grid[7][20] = '🔷'
    this.grid[7][22] = '🔷'
    this.grid[7][23] = '🔷'
    this.grid[7][24] = '🔷'
    this.grid[7][25] = '🔷'
    //line 8
    this.grid[8][7] = '🔷'
    this.grid[8][8] = '🔷'
    this.grid[8][13] = '🔷'
    this.grid[8][14] = '🔷'
    this.grid[8][19] = '🔷'
    this.grid[8][20] = '🔷'
    //line 9
    this.grid[9][0] = '🔷'
    this.grid[9][1] = '🔷'
    this.grid[9][2] = '🔷'
    this.grid[9][3] = '🔷'
    this.grid[9][4] = '🔷'
    this.grid[9][5] = '🔷'
    this.grid[9][7] = '🔷'
    this.grid[9][8] = '🔷'
    this.grid[9][9] = '🔷'
    this.grid[9][10] = '🔷'
    this.grid[9][11] = '🔷'
    this.grid[9][13] = '🔷'
    this.grid[9][14] = '🔷'
    this.grid[9][16] = '🔷'
    this.grid[9][17] = '🔷'
    this.grid[9][18] = '🔷'
    this.grid[9][19] = '🔷'
    this.grid[9][20] = '🔷'
    this.grid[9][22] = '🔷'
    this.grid[9][23] = '🔷'
    this.grid[9][24] = '🔷'
    this.grid[9][25] = '🔷'
    this.grid[9][26] = '🔷'
    this.grid[9][27] = '🔷'
    //line 10
    this.grid[10][0] = ' '
    this.grid[10][5] = '🔷'
    this.grid[10][7] = '🔷'
    this.grid[10][8] = '🔷'
    this.grid[10][9] = '🔷'
    this.grid[10][10] = '🔷'
    this.grid[10][11] = '🔷'
    this.grid[10][13] = '🔷'
    this.grid[10][14] = '🔷'
    this.grid[10][16] = '🔷'
    this.grid[10][17] = '🔷'
    this.grid[10][18] = '🔷'
    this.grid[10][19] = '🔷'
    this.grid[10][20] = '🔷'
    this.grid[10][22] = '🔷'
    this.grid[10][27] = ' '
    //line 11
    this.grid[11][0] = ' '
    this.grid[11][5] = '🔷'
    this.grid[11][7] = '🔷'
    this.grid[11][8] = '🔷'
    this.grid[11][19] = '🔷'
    this.grid[11][20] = '🔷'
    this.grid[11][22] = '🔷'
    this.grid[11][27] = ' '
    //line 12
    this.grid[12][0] = ' '
    this.grid[12][5] = '🔷'
    this.grid[12][7] = '🔷'
    this.grid[12][8] = '🔷'
    this.grid[12][10] = '🔷'
    this.grid[12][11] = '🔷'
    this.grid[12][12] = '🔷'
    this.grid[12][15] = '🔷'
    this.grid[12][16] = '🔷'
    this.grid[12][17] = '🔷'
    this.grid[12][19] = '🔷'
    this.grid[12][20] = '🔷'
    this.grid[12][22] = '🔷'
    this.grid[12][27] = ' '
    //line 13
    this.grid[13][0] = '🔷'
    this.grid[13][1] = '🔷'
    this.grid[13][2] = '🔷'
    this.grid[13][3] = '🔷'
    this.grid[13][4] = '🔷'
    this.grid[13][5] = '🔷'
    this.grid[13][7] = '🔷'
    this.grid[13][8] = '🔷'
    this.grid[13][10] = '🔷'
    this.grid[13][17] = '🔷'
    this.grid[13][19] = '🔷'
    this.grid[13][20] = '🔷'
    this.grid[13][22] = '🔷'
    this.grid[13][23] = '🔷'
    this.grid[13][24] = '🔷'
    this.grid[13][25] = '🔷'
    this.grid[13][26] = '🔷'
    this.grid[13][27] = '🔷'
    //line 14
    this.grid[14][0] = ' '
    this.grid[14][10] = '🔷'
    this.grid[14][17] = '🔷'
    this.grid[14][27] = ' '
    //line 15
    this.grid[15][0] = '🔷'
    this.grid[15][1] = '🔷'
    this.grid[15][2] = '🔷'
    this.grid[15][3] = '🔷'
    this.grid[15][4] = '🔷'
    this.grid[15][5] = '🔷'
    this.grid[15][7] = '🔷'
    this.grid[15][8] = '🔷'
    this.grid[15][10] = '🔷'
    this.grid[15][17] = '🔷'
    this.grid[15][19] = '🔷'
    this.grid[15][20] = '🔷'
    this.grid[15][22] = '🔷'
    this.grid[15][23] = '🔷'
    this.grid[15][24] = '🔷'
    this.grid[15][25] = '🔷'
    this.grid[15][26] = '🔷'
    this.grid[15][27] = '🔷'
    //line 16
    this.grid[16][0] = ' '
    this.grid[16][5] = '🔷'
    this.grid[16][7] = '🔷'
    this.grid[16][8] = '🔷'
    this.grid[16][10] = '🔷'
    this.grid[16][11] = '🔷'
    this.grid[16][12] = '🔷'
    this.grid[16][13] = '🔷'
    this.grid[16][14] = '🔷'
    this.grid[16][15] = '🔷'
    this.grid[16][16] = '🔷'
    this.grid[16][17] = '🔷'
    this.grid[16][19] = '🔷'
    this.grid[16][20] = '🔷'
    this.grid[16][22] = '🔷'
    this.grid[16][27] = ' '
    //line 17
    this.grid[17][0] = ' '
    this.grid[17][5] = '🔷'
    this.grid[17][7] = '🔷'
    this.grid[17][8] = '🔷'
    this.grid[17][19] = '🔷'
    this.grid[17][20] = '🔷'
    this.grid[17][22] = '🔷'
    this.grid[17][27] = ' '
    //line 18
    this.grid[18][0] = ' '
    this.grid[18][5] = '🔷'
    this.grid[18][7] = '🔷'
    this.grid[18][8] = '🔷'
    this.grid[18][10] = '🔷'
    this.grid[18][11] = '🔷'
    this.grid[18][12] = '🔷'
    this.grid[18][13] = '🔷'
    this.grid[18][14] = '🔷'
    this.grid[18][15] = '🔷'
    this.grid[18][16] = '🔷'
    this.grid[18][17] = '🔷'
    this.grid[18][19] = '🔷'
    this.grid[18][20] = '🔷'
    this.grid[18][22] = '🔷'
    this.grid[18][27] = ' '
    //line 19
    this.grid[19][0] = '🔷'
    this.grid[19][1] = '🔷'
    this.grid[19][2] = '🔷'
    this.grid[19][3] = '🔷'
    this.grid[19][4] = '🔷'
    this.grid[19][5] = '🔷'
    this.grid[19][7] = '🔷'
    this.grid[19][8] = '🔷'
    this.grid[19][10] = '🔷'
    this.grid[19][11] = '🔷'
    this.grid[19][12] = '🔷'
    this.grid[19][13] = '🔷'
    this.grid[19][14] = '🔷'
    this.grid[19][15] = '🔷'
    this.grid[19][16] = '🔷'
    this.grid[19][17] = '🔷'
    this.grid[19][19] = '🔷'
    this.grid[19][20] = '🔷'
    this.grid[19][22] = '🔷'
    this.grid[19][23] = '🔷'
    this.grid[19][24] = '🔷'
    this.grid[19][25] = '🔷'
    this.grid[19][26] = '🔷'
    this.grid[19][27] = '🔷'
    //line 20
    this.grid[20][13] = '🔷'
    this.grid[20][14] = '🔷'
    //line 21
    this.grid[21][2] = '🔷'
    this.grid[21][3] = '🔷'
    this.grid[21][4] = '🔷'
    this.grid[21][5] = '🔷'
    this.grid[21][7] = '🔷'
    this.grid[21][8] = '🔷'
    this.grid[21][9] = '🔷'
    this.grid[21][10] = '🔷'
    this.grid[21][11] = '🔷'
    this.grid[21][13] = '🔷'
    this.grid[21][14] = '🔷'
    this.grid[21][16] = '🔷'
    this.grid[21][17] = '🔷'
    this.grid[21][18] = '🔷'
    this.grid[21][19] = '🔷'
    this.grid[21][20] = '🔷'
    this.grid[21][22] = '🔷'
    this.grid[21][23] = '🔷'
    this.grid[21][24] = '🔷'
    this.grid[21][25] = '🔷'
    //line 22
    this.grid[22][2] = '🔷'
    this.grid[22][3] = '🔷'
    this.grid[22][4] = '🔷'
    this.grid[22][5] = '🔷'
    this.grid[22][7] = '🔷'
    this.grid[22][8] = '🔷'
    this.grid[22][9] = '🔷'
    this.grid[22][10] = '🔷'
    this.grid[22][11] = '🔷'
    this.grid[22][13] = '🔷'
    this.grid[22][14] = '🔷'
    this.grid[22][16] = '🔷'
    this.grid[22][17] = '🔷'
    this.grid[22][18] = '🔷'
    this.grid[22][19] = '🔷'
    this.grid[22][20] = '🔷'
    this.grid[22][22] = '🔷'
    this.grid[22][23] = '🔷'
    this.grid[22][24] = '🔷'
    this.grid[22][25] = '🔷'
    //line 23
    this.grid[23][4] = '🔷'
    this.grid[23][5] = '🔷'
    this.grid[23][22] = '🔷'
    this.grid[23][23] = '🔷'
    //line 24
    this.grid[24][1] = '🔷'
    this.grid[24][2] = '🔷'
    this.grid[24][4] = '🔷'
    this.grid[24][5] = '🔷'
    this.grid[24][7] = '🔷'
    this.grid[24][8] = '🔷'
    this.grid[24][10] = '🔷'
    this.grid[24][11] = '🔷'
    this.grid[24][12] = '🔷'
    this.grid[24][13] = '🔷'
    this.grid[24][14] = '🔷'
    this.grid[24][15] = '🔷'
    this.grid[24][16] = '🔷'
    this.grid[24][17] = '🔷'
    this.grid[24][19] = '🔷'
    this.grid[24][20] = '🔷'
    this.grid[24][22] = '🔷'
    this.grid[24][23] = '🔷'
    this.grid[24][25] = '🔷'
    this.grid[24][26] = '🔷'
    //line 25
    this.grid[25][1] = '🔷'
    this.grid[25][2] = '🔷'
    this.grid[25][4] = '🔷'
    this.grid[25][5] = '🔷'
    this.grid[25][7] = '🔷'
    this.grid[25][8] = '🔷'
    this.grid[25][10] = '🔷'
    this.grid[25][11] = '🔷'
    this.grid[25][12] = '🔷'
    this.grid[25][13] = '🔷'
    this.grid[25][14] = '🔷'
    this.grid[25][15] = '🔷'
    this.grid[25][16] = '🔷'
    this.grid[25][17] = '🔷'
    this.grid[25][19] = '🔷'
    this.grid[25][20] = '🔷'
    this.grid[25][22] = '🔷'
    this.grid[25][23] = '🔷'
    this.grid[25][25] = '🔷'
    this.grid[25][26] = '🔷'
    //line 26
    this.grid[26][7] = '🔷'
    this.grid[26][8] = '🔷'
    this.grid[26][13] = '🔷'
    this.grid[26][14] = '🔷'
    this.grid[26][19] = '🔷'
    this.grid[26][20] = '🔷'
    //line 27
    this.grid[27][2] = '🔷'
    this.grid[27][3] = '🔷'
    this.grid[27][4] = '🔷'
    this.grid[27][5] = '🔷'
    this.grid[27][6] = '🔷'
    this.grid[27][7] = '🔷'
    this.grid[27][8] = '🔷'
    this.grid[27][9] = '🔷'
    this.grid[27][10] = '🔷'
    this.grid[27][11] = '🔷'
    this.grid[27][13] = '🔷'
    this.grid[27][14] = '🔷'
    this.grid[27][16] = '🔷'
    this.grid[27][17] = '🔷'
    this.grid[27][18] = '🔷'
    this.grid[27][19] = '🔷'
    this.grid[27][20] = '🔷'
    this.grid[27][21] = '🔷'
    this.grid[27][22] = '🔷'
    this.grid[27][23] = '🔷'
    this.grid[27][24] = '🔷'
    this.grid[27][25] = '🔷'
    // line 28
    this.grid[28][2] = '🔷'
    this.grid[28][3] = '🔷'
    this.grid[28][4] = '🔷'
    this.grid[28][5] = '🔷'
    this.grid[28][6] = '🔷'
    this.grid[28][7] = '🔷'
    this.grid[28][8] = '🔷'
    this.grid[28][9] = '🔷'
    this.grid[28][10] = '🔷'
    this.grid[28][11] = '🔷'
    this.grid[28][13] = '🔷'
    this.grid[28][14] = '🔷'
    this.grid[28][16] = '🔷'
    this.grid[28][17] = '🔷'
    this.grid[28][18] = '🔷'
    this.grid[28][19] = '🔷'
    this.grid[28][20] = '🔷'
    this.grid[28][21] = '🔷'
    this.grid[28][22] = '🔷'
    this.grid[28][23] = '🔷'
    this.grid[28][24] = '🔷'
    this.grid[28][25] = '🔷'
    this.grid[1][1] = '😬'
    return this.grid
  }
  updateBoard(playerCoords){
    let [row, col] = playerCoords
    this.grid[row][col] = '😬'
  }
  showBoard(){
    this.grid.forEach (row => console.log (c.bgBlack.bold (row.join (' '))));
  }
  isValidMove(playerCoords){
    if (move === 'w') {
      // if (row - 1 >= 1) {
      if(arr[row-1][col] !== '🔷'){
        if(arr[row-1][col] === '⚆') hs+=10
        arr[row][col] = ' ';
        row--;
        arr[row][col] = '😬';
      }
    } else if (move === 'a') {
      // if (col - 1 >= 1) {
      if(arr[row][col-1] !== '🔷'){
        if(arr[row][col-1] === '⚆') hs+=10
        arr[row][col] = ' ';
        col--;
        arr[row][col] = '😬';
      }
    } else if (move === 's') {
      if(arr[row+1][col] !== '🔷'){
        if(arr[row+1][col] === '⚆') hs+=10
      // if (row + 1 < arr.length - 1) {
        arr[row][col] = ' ';
        row++;
        arr[row][col] = '😬';
      }
    } else if (move === 'd') {
      if(arr[row][col + 1] !== '🔷'){
        if(arr[row][col+1] === '⚆') hs+=10
      // if (col + 1 < arr.length - 1) {
        arr[row][col] = ' ';
        col++;
        arr[row][col] = '😬';
      }
    }
  }
}

module.exports = Board;

let newBoard = new Board();
newBoard.showBoard();
newBoard.updateBoard([10,10])
newBoard.showBoard();
