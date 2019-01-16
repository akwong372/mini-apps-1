import Square from './square.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: '[R]',
    }
    this.placePiece = this.placePiece.bind(this)
  }

placePiece(e) {
  console.log(e.target.textContent)
  e.target.textContent = this.state.currentPlayer;
}

  render() {
    return (
      <div className='container'>
        <h2>game board</h2>
        <div id='row5' className='row'>
          <Square x={0} y={5} placePiece={this.placePiece}/>
          <Square x={1} y={5} placePiece={this.placePiece}/>
          <Square x={2} y={5} placePiece={this.placePiece}/>
          <Square x={3} y={5} placePiece={this.placePiece}/>
          <Square x={4} y={5} placePiece={this.placePiece}/>
          <Square x={5} y={5} placePiece={this.placePiece}/>
          <Square x={6} y={5} placePiece={this.placePiece}/>
        </div>
        <div id='row4' className='row'>
          <Square x={0} y={4} placePiece={this.placePiece}/>
          <Square x={1} y={4} placePiece={this.placePiece}/>
          <Square x={2} y={4} placePiece={this.placePiece}/>
          <Square x={3} y={4} placePiece={this.placePiece}/>
          <Square x={4} y={4} placePiece={this.placePiece}/>
          <Square x={5} y={4} placePiece={this.placePiece}/>
          <Square x={6} y={4} placePiece={this.placePiece}/>
        </div>
        <div id='row3' className='row'>
          <Square x={0} y={3} placePiece={this.placePiece}/>
          <Square x={1} y={3} placePiece={this.placePiece}/>
          <Square x={2} y={3} placePiece={this.placePiece}/>
          <Square x={3} y={3} placePiece={this.placePiece}/>
          <Square x={4} y={3} placePiece={this.placePiece}/>
          <Square x={5} y={3} placePiece={this.placePiece}/>
          <Square x={6} y={3} placePiece={this.placePiece}/>
        </div>
        <div id='row2' className='row'>
          <Square x={0} y={2} placePiece={this.placePiece}/>
          <Square x={1} y={2} placePiece={this.placePiece}/>
          <Square x={2} y={2} placePiece={this.placePiece}/>
          <Square x={3} y={2} placePiece={this.placePiece}/>
          <Square x={4} y={2} placePiece={this.placePiece}/>
          <Square x={5} y={2} placePiece={this.placePiece}/>
          <Square x={6} y={2} placePiece={this.placePiece}/>
        </div>
        <div id='row1' className='row'>
          <Square x={0} y={1} placePiece={this.placePiece}/>
          <Square x={1} y={1} placePiece={this.placePiece}/>
          <Square x={2} y={1} placePiece={this.placePiece}/>
          <Square x={3} y={1} placePiece={this.placePiece}/>
          <Square x={4} y={1} placePiece={this.placePiece}/>
          <Square x={5} y={1} placePiece={this.placePiece}/>
          <Square x={6} y={1} placePiece={this.placePiece}/>
        </div>
        <div id='row0' className='row'>
          <Square x={0} y={0} placePiece={this.placePiece}/>
          <Square x={1} y={0} placePiece={this.placePiece}/>
          <Square x={2} y={0} placePiece={this.placePiece}/>
          <Square x={3} y={0} placePiece={this.placePiece}/>
          <Square x={4} y={0} placePiece={this.placePiece}/>
          <Square x={5} y={0} placePiece={this.placePiece}/>
          <Square x={6} y={0} placePiece={this.placePiece}/>
        </div>
      </div>
    )
  }
}

export default App;