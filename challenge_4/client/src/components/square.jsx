class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    }
  }

  // detectPlayer() {
  //   console.log(this)
  //   if (this.props.currentPlayer === '[R]' && this.state.red === 0 && this.state.yellow === 0){
  //     this.setState({
  //       red: 1,
  //       yellow: 0
  //     });
  //   } else {
  //     this.setState({
  //       red: 0,
  //       yellow: 1
  //     });
  //   }
  //   console.log(this.state)
  // }

  // clicked(){
  //   this.setState({
  //     clicked: 1
  //   }, ()=>console.log(this.state))
  // }

  render() {
    return (
      <div x={this.props.x} y={this.props.y} className='square' onClick={(e)=>{}}>
        [  ]
      </div>
    )
  }
}

export default Square;