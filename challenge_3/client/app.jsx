//import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.page <= 3) {
      console.log(this.state)
      var addPage = this.state.page;
      addPage++;
      this.setState({
        page: addPage
      })
    }
    var data = {}
    for (var i = 0; i < e.target.length - 1; i++) {
      data[e.target[i].id] = e.target[i].value;
    }
    console.log(data)
    axios.post('/', data)
      .then(function (reponse) {
        console.log('posted data', reponse);

        // return reponse
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>A React Component</h1>
        <h2>test state {this.state.page}</h2>
        <div>
          <Redirecting appPage={this.state.page} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }

}

window.App = App;