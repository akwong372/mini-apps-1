class CompleteCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingInfo: '',
      billingInfo: ''
    }
  }

  componentDidMount() {
    axios.get('/data', {
      params: {
        username: this.props.user
      }
    })
      .then((response) => {
        console.log('get data', response.data);
        for (var key in response.data[0]) {
          this.setState({
            [key]: response.data[0][key]
          })
        }
        console.log(this.state)
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  render() {
    return (
      <div className='container'>
        <h1>Review Your Order</h1>
        <br />
        <div>
          <span>username: {this.state.username}</span>
          <br />
          <span>email: {this.state.email}</span>
          <br />
          <h2>Shipping Information</h2>
          {Object.keys(this.state.shippingInfo).map((item) => {
            return <div key={item}>
              <span key={item}>{item}: {this.state.shippingInfo[item]}</span>
              <br />
            </div>
          })}
          <br />
          <h2>Billing Information</h2>
          {Object.keys(this.state.billingInfo).map((item) => {
            return <div key={item}>
            <span key={item}>{item}: {this.state.billingInfo[item]}</span>
            <br />
          </div>
          })}
        </div>
        <br />
        <form method='POST' action='/' onSubmit={this.props.nextPage}>
          <input type='submit' className='btn btn-success' value='Purchase' />
        </form>
        <br/>
      <button onClick={this.props.goBack} className='btn btn-info'>Back</button>
      </div>
    )
  }
}


window.CompleteCheckout = CompleteCheckout;