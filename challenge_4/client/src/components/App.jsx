import Square from './square.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: '',
      yCoords: [0, 1, 2, 3, 4, 5],
      xCoords: [0, 1, 2, 3, 4, 5, 6],
      redSpaces: [],
      yellowSpaces: []
    }
    this.placePiece = this.placePiece.bind(this)
  }

  switchPlayer() {
    if (this.state.currentPlayer === '[R]') {
      this.setState({
        currentPlayer: '[Y]'
      });
    } else {
      this.setState({
        currentPlayer: '[R]'
      });
    }
  }

  dropPiece(e) {
    var column = e.target.parentNode.children;
    for (var i = column.length - 1; i >= 0; i--) {
      if (column[i].textContent === '[  ]') {
        this.placePiece(column[i]);
        break;
      }
    }
  }

  placePiece(space) {
    var xCoord = Number(space.attributes.x.value);
    var yCoord = Number(space.attributes.y.value);
    if (space.textContent !== '[R]' && space.textContent !== '[Y]') {
      if (this.state.currentPlayer === '[R]') {
        this.setState({
          redSpaces: [...this.state.redSpaces, [xCoord, yCoord]]
        }, () => this.checkWin())
      } else if (this.state.currentPlayer === '[Y]') {
        this.setState({
          yellowSpaces: [...this.state.yellowSpaces, [xCoord, yCoord]]
        }, () => this.checkWin())
      }
      space.textContent = this.state.currentPlayer;
      this.switchPlayer();
    }
  }

  checkColumnWin() {
    var currColumn = [];
    for (var i = 0; i < this.state.xCoords.length; i++) {
      if (this.state.currentPlayer === '[Y]') {
        currColumn = this.state.redSpaces.map((pair) => {//collect only y coordinates of each used space of each column
          if (pair[0] === i) {
            return pair[1];
          }
        })
          .filter((item) => item !== undefined)//filter out undefined
          .sort((a, b) => a - b);//sort smallest to largest
      } else if (this.state.currentPlayer === '[R]') {
        currColumn = this.state.yellowSpaces.map((pair) => {
          if (pair[0] === i) {
            return pair[1];
          }
        })
          .filter((item) => item !== undefined)
          .sort((a, b) => a - b);
      }
      //console.log(`column ${i}: `, currColumn);
      if (currColumn.length > 3) {
        for (var i = 0; i < 2; i++) {
          if ((currColumn[i] && currColumn.includes(currColumn[i] + 1) && currColumn.includes(currColumn[i] + 2) && currColumn.includes(currColumn[i] + 3)) || (currColumn[i] === 0 && currColumn[1] === 1 && currColumn[2] === 2 && currColumn[3] === 3)) {
            console.log('win')
          }
        }
        break;
      }
    }
  }

  checkRowWin() {
    var currRow = [];
    for (var i = 0; i < this.state.yCoords.length; i++) {
      if (this.state.currentPlayer === '[Y]') {
        currRow = this.state.redSpaces.map((pair) => {//collect only x coordinates of each used space of each row
          if (pair[1] === i) {
            return pair[0];
          }
        })
          .filter((item) => item !== undefined)
          .sort((a, b) => a - b);
      } else if (this.state.currentPlayer === '[R]') {
        currRow = this.state.yellowSpaces.map((pair) => {
          if (pair[1] === i) {
            return pair[0];
          }
        })
          .filter((item) => item !== undefined)
          .sort((a, b) => a - b);
      }
      //console.log(`row ${i}: `, currRow);
      if (currRow.length > 3) {
        for (var i = 0; i < 3; i++) {

          if ((currRow[i] && currRow.includes(currRow[i] + 1) && currRow.includes(currRow[i] + 2) && currRow.includes(currRow[i] + 3)) || (currRow[i] === 0 && currRow[1] === 1 && currRow[2] === 2 && currRow[3] === 3)) {
            console.log('win')
          }
        }
        break;
      }
    }
  }

  checkWin() {
    this.checkColumnWin();
    this.checkRowWin();
  }


  componentDidMount() {
    this.setState({
      currentPlayer: '[R]'
    })
  }

  render() {
    return (
      <div className='container row' onClick={(e) => { this.dropPiece(e) }}>
        <div id='column0'>
          {this.state.yCoords.map((coord) => <Square key={`c0${coord}`} y={coord} x={0} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />)}
        </div>
        <div id='column1'>
          {this.state.yCoords.map((coord) => <Square key={`c1${coord}`} y={coord} x={1} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />)}
        </div>
        <div id='column2'>
          {this.state.yCoords.map((coord) => <Square key={`c2${coord}`} y={coord} x={2} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />)}
        </div>
        <div id='column3'>
          {this.state.yCoords.map((coord) => <Square key={`c3${coord}`} y={coord} x={3} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />)}
        </div>
        <div id='column4'>
          {this.state.yCoords.map((coord) => <Square key={`c4${coord}`} y={coord} x={4} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />)}
        </div>
        <div id='column5'>
          {this.state.yCoords.map((coord) => <Square key={`c5${coord}`} y={coord} x={5} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />)}
        </div>
        <div id='column6'>
          {this.state.yCoords.map((coord) => <Square key={`c6${coord}`} y={coord} x={6} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />)}
        </div>
      </div>
    )
  }
}

export default App;