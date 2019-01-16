import Square from './square.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='container'>
        <h2>game board</h2>
        <div id='row5' className='row'>
          <Square x={0} y={5} />
          <Square x={1} y={5} />
          <Square x={2} y={5} />
          <Square x={3} y={5} />
          <Square x={4} y={5} />
          <Square x={5} y={5} />
          <Square x={6} y={5} />
        </div>
        <div id='row4' className='row'>
          <Square x={0} y={4} />
          <Square x={1} y={4} />
          <Square x={2} y={4} />
          <Square x={3} y={4} />
          <Square x={4} y={4} />
          <Square x={5} y={4} />
          <Square x={6} y={4} />
        </div>
        <div id='row3' className='row'>
          <Square x={0} y={3} />
          <Square x={1} y={3} />
          <Square x={2} y={3} />
          <Square x={3} y={3} />
          <Square x={4} y={3} />
          <Square x={5} y={3} />
          <Square x={6} y={3} />
        </div>
        <div id='row2' className='row'>
          <Square x={0} y={2} />
          <Square x={1} y={2} />
          <Square x={2} y={2} />
          <Square x={3} y={2} />
          <Square x={4} y={2} />
          <Square x={5} y={2} />
          <Square x={6} y={2} />
        </div>
        <div id='row1' className='row'>
          <Square x={0} y={1} />
          <Square x={1} y={1} />
          <Square x={2} y={1} />
          <Square x={3} y={1} />
          <Square x={4} y={1} />
          <Square x={5} y={1} />
          <Square x={6} y={1} />
        </div>
        <div id='row0' className='row'>
          <Square x={0} y={0} />
          <Square x={1} y={0} />
          <Square x={2} y={0} />
          <Square x={3} y={0} />
          <Square x={4} y={0} />
          <Square x={5} y={0} />
          <Square x={6} y={0} />
        </div>
      </div>
    )
  }
}

export default App;