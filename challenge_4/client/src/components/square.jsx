class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      yellow: 0
    }
  }

  render() {
    return (
      <div className='square'>
        [  ]
      </div>
    )
  }
}

export default Square;