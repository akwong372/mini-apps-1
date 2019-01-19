var expect = require('chai').expect;

describe('Win Conditions', function () {
    this.state = {
      currentPlayer: '',
      remainingSpaces: 42,
      yCoords: [5, 4, 3, 2, 1, 0],
      xCoords: [0, 1, 2, 3, 4, 5, 6],
      redSpaces: [],
      yellowSpaces: [],
      win: ''
    }

  var columnChecker = () => {
    var currColumn = [];
    var currPlayer = '';
    for (var i = 0; i < 7; i++) {
      if (this.state.currentPlayer === '[Y]') {
        currPlayer = 'Red'
        currColumn = this.state.redSpaces.map((pair) => {//collect only y coordinates of each used space of each column
          if (pair[0] === i) {
            return pair[1];
          }
        })
          .filter((item) => item !== undefined)//filter out undefined
          .sort((a, b) => a - b);//sort smallest to largest
      } else if (this.state.currentPlayer === '[R]') {
        currPlayer = 'Yellow'
        currColumn = this.state.yellowSpaces.map((pair) => {
          if (pair[0] === i) {
            return pair[1];
          }
        })
          .filter((item) => item !== undefined)
          .sort((a, b) => a - b);
      }
      if (currColumn.length > 3) {
        for (var i = 0; i < 2; i++) {
          if ((currColumn[i] && currColumn.includes(currColumn[i] + 1) && currColumn.includes(currColumn[i] + 2) && currColumn.includes(currColumn[i] + 3)) || (currColumn[i] === 0 && currColumn[1] === 1 && currColumn[2] === 2 && currColumn[3] === 3)) {
            this.state.win= `${currPlayer}`;
          }
        }
        break;
      }
    }
  }

  var rowChecker = () => {
    var currRow = [];
    var currPlayer = '';
    for (var i = 0; i < this.state.yCoords.length; i++) {
      if (this.state.currentPlayer === '[Y]') {
        currPlayer = 'Red'
        currRow = this.state.redSpaces.map((pair) => {//collect only x coordinates of each used space of each row
          if (pair[1] === i) {
            return pair[0];
          }
        })
          .filter((item) => item !== undefined)
          .sort((a, b) => a - b);
      } else if (this.state.currentPlayer === '[R]') {
        currPlayer = 'Yellow'
        currRow = this.state.yellowSpaces.map((pair) => {
          if (pair[1] === i) {
            return pair[0];
          }
        })
          .filter((item) => item !== undefined)
          .sort((a, b) => a - b);
      }
      if (currRow.length > 3) {
        for (var i = 0; i < 3; i++) {

          if ((currRow[i] && currRow.includes(currRow[i] + 1) && currRow.includes(currRow[i] + 2) && currRow.includes(currRow[i] + 3)) || (currRow[i] === 0 && currRow[1] === 1 && currRow[2] === 2 && currRow[3] === 3)) {
            this.state.win = `${currPlayer}`;
          }
        }
        break;
      }
    }
  }

  var diagonalChecker = () => {
    var currDiag = [];
    var currPlayer = '';

    if (this.state.currentPlayer === '[Y]') {
      currPlayer = 'Red'
      currDiag = this.state.redSpaces;
    } else if (this.state.currentPlayer === '[R]') {
      currPlayer = 'Yellow'
      currDiag = this.state.yellowSpaces;
    }

    if (currDiag.length > 3) {
      for (var i = 0; i < currDiag.length; i++) {

        //bottom left to top right
        if (JSON.stringify(currDiag).includes(JSON.stringify([currDiag[i][0], currDiag[i][1]]))
          && JSON.stringify(currDiag).includes(JSON.stringify([currDiag[i][0] + 1, currDiag[i][1] + 1]))
          && JSON.stringify(currDiag).includes(JSON.stringify([currDiag[i][0] + 2, currDiag[i][1] + 2]))
          && JSON.stringify(currDiag).includes(JSON.stringify([currDiag[i][0] + 3, currDiag[i][1] + 3]))) {
          this.state.win = `${currPlayer}`
        }

        //bottom right to top left
        if (JSON.stringify(currDiag).includes(JSON.stringify([currDiag[i][0], currDiag[i][1]]))
          && JSON.stringify(currDiag).includes(JSON.stringify([currDiag[i][0] - 1, currDiag[i][1] + 1]))
          && JSON.stringify(currDiag).includes(JSON.stringify([currDiag[i][0] - 2, currDiag[i][1] + 2]))
          && JSON.stringify(currDiag).includes(JSON.stringify([currDiag[i][0] - 3, currDiag[i][1] + 3]))) {
          this.state.win = `${currPlayer}`
        }
      }
    }
  }

  beforeEach(() => {
    this.state.currentPlayer = '';
    this.state.remainingSpaces = 42;
    this.state.redSpaces = [];
    this.state.yellowSpaces = [];
    this.state.win = '';
  });


    it('should check for column wins', () => {
      this.state.currentPlayer = '[Y]'
      this.state.redSpaces = [[0,0],[0,1],[0,2],[0,3]];
      columnChecker();

      expect(this.state.win).to.equal('Red');
    });

    it('should check for row wins', () => {
      this.state.currentPlayer = '[Y]'
      this.state.redSpaces = [[0,0],[1,0],[2,0],[3,0]];
      rowChecker();

      expect(this.state.win).to.equal('Red');
    });

    it('should check for diagonal win (bottom left to top right)', () => {
      this.state.currentPlayer = '[Y]'
      this.state.redSpaces = [[0,0],[1,1],[2,2],[3,3]];
      diagonalChecker();

      expect(this.state.win).to.equal('Red');
    });

    it('should check for diagonal win (bottom right to top left)', () => {
      this.state.currentPlayer = '[Y]'
      this.state.redSpaces = [[6,0],[5,1],[4,1],[4,2],[3,2],[3,3]];
      diagonalChecker();

      expect(this.state.win).to.equal('Red');
    });

    it('should check for a tie', () => {
      this.state.remainingSpaces = 0;
      let winner;

      if (this.state.win === 'Red'){
        winner = `Red wins!`
      } else if (this.state.win === 'Yellow'){
        winner = `Yellow wins!`
      } else if (this.state.win === '' && this.state.remainingSpaces <= 0){
        winner = `It's a tie!`
      }

      expect(winner).to.equal(`It's a tie!`);
    });
 });