class CompleteCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }

  componentDidMount(){
    axios.get('/data')
    .then(function (response) {
      console.log('get data', response);

      // return response
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h1>Account Creation</h1>
        <form method='POST' action='/' onSubmit={this.props.nextPage}>
          <input type='submit' value='Next' />
        </form>
      </div>
    )
  }
}


window.CompleteCheckout = CompleteCheckout;