
class Board {
  constructor() {
    this.grid = [["_","_","_"],["_","_","_"],["_","_","_"]];
    this.mark = ["O","X"];
  }

  placeMark(pos,mark) {
    if (this.validMove) {
      this.grid[pos[0]][pos[1]] = mark;
    }
  }

  validMove(pos) {
    if (this.grid[pos[0],pos[1]] === null) {
      return true;
    } else {
      return false;
    }
  }

  winner(array) {
    array.forEach(row => {
      if (row.every(el => el === "X") || row.every(el => el === "O")) {
        return true;
      }
    });
    return false;
  }

  checkWinner() {
    if (this.winner(this.grid)) {
      return true;
    } else if (this.winner(this.column())) {
      return true;
    } else if (this.winner(this.diagonal())) {
      return true;
    } else {
      return false;
    }
  }

  column() {
    return this.grid[0].map( (el,idx) =>
      [el].concat(this.grid[1][idx])
        .concat(this.grid[2][idx])
      );
  }

  diagonal() {
      return [[this.grid[0][0],this.grid[1][1],this.grid[2][2]],
       [this.grid[0][2],this.grid[1][1],this.grid[2][0]]];
  }

  display() {
    const displayGrid = this.grid.map(row =>
    row.join("|"));
    displayGrid.forEach(row => {
    console.log(row);
    });
  }

}

let newGame = new Board;
newGame.placeMark([0,1],"X");
newGame.display();
console.log(newGame.diagonal());
console.log(newGame.column());
console.log(newGame.checkWinner());
