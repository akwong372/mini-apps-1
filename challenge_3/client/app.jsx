//import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var data = {}
    for (var i = 0; i < e.target.length - 1; i++){
      data[e.target[i].id] = e.target[i].value;
    }
    console.log(data)
    axios.post('/', data)
    .then(function (reponse){
      console.log('posted data', reponse);
     // return reponse
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h1>A React Component</h1>
        <h2>test state {this.state.test}</h2>
        <form>
          <input type='submit' value='Checkout' />
        </form>
        <div>
          <NameEmailPass test='test' handleSubmit={this.handleSubmit}/>
        </div>
        <div>
          <AddressInfo />
        </div>
        <div>
          <CreditInfo />
        </div>
      </div>
    )
  }

}

window.App = App;