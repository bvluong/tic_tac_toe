
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

  winner() {
    this.grid.forEach(row => {
      if (row.every(el => el === "X") || row.every(el => el === "O")) {
        return true;
      }
    });
    return false;
  }

  columns() {
  }

  diagonal() {

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
