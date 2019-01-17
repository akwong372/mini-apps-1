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

  dropPiece(e) { //place pieces starting from bottom
    // console.log('X: ',e.target.attributes.x);
    // console.log('Y: ',e.target.attributes.y);
    // console.log(e.target.parentNode.children);
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
        }, ()=>this.checkColumnWin())
      } else if (this.state.currentPlayer === '[Y]') {
        this.setState({
          yellowSpaces: [...this.state.yellowSpaces, [xCoord, yCoord]]
        }, ()=>this.checkColumnWin())
      }
      space.textContent = this.state.currentPlayer;
      this.switchPlayer();
    }
  }

  checkColumnWin() {
    var currColumn = [];
    for (var i = 0; i < this.state.xCoords.length; i++) {
      if (this.state.currentPlayer === '[Y]') {
        currColumn = this.state.redSpaces.map((pair) => {
          if (pair[0] === i) {
            return pair[1];
          }
        }).filter((item) => item !== undefined);
      } else if (this.state.currentPlayer === '[R]') {
        currColumn = this.state.yellowSpaces.map((pair) => {
          if (pair[0] === i) {
            return pair[1];
          }
        }).filter((item) => item !== undefined);
      }
      console.log(`column ${i}: `, currColumn);
      if (currColumn.length>3){
        for (var i = 0; i < 2; i++){
          if ((currColumn[i] || currColumn[i] === 0) && currColumn[i+1] && currColumn[i+2] && currColumn[i+3]){
            console.log('win')
          }
        }
        break;
      }
    }
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
          <Square y={5} x={0} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={4} x={0} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={3} x={0} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={2} x={0} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={1} x={0} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={0} x={0} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
        </div>
        <div id='column1'>
          <Square y={5} x={1} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={4} x={1} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={3} x={1} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={2} x={1} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={1} x={1} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={0} x={1} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
        </div>
        <div id='column2'>
          <Square y={5} x={2} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={4} x={2} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={3} x={2} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={2} x={2} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={1} x={2} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={0} x={2} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
        </div>
        <div id='column3'>
          <Square y={5} x={3} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={4} x={3} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={3} x={3} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={2} x={3} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={1} x={3} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={0} x={3} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
        </div>
        <div id='column4'>
          <Square y={5} x={4} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={4} x={4} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={3} x={4} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={2} x={4} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={1} x={4} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={0} x={4} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
        </div>
        <div id='column5'>
          <Square y={5} x={5} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={4} x={5} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={3} x={5} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={2} x={5} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={1} x={5} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={0} x={5} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
        </div>
        <div id='column6'>
          <Square y={5} x={6} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={4} x={6} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={3} x={6} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={2} x={6} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={1} x={6} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
          <Square y={0} x={6} placePiece={this.placePiece} currentPlayer={this.state.currentPlayer} />
        </div>

      </div>
    )
  }
}

export default App;