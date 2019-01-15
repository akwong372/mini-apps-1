class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      user: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    if (this.state.page < 4) {
      var addPage = this.state.page;
      addPage++;
      this.setState({
        page: addPage
      })
    }
     if (this.state.page === 4){
      this.setState({
        page: 0,
        user: ''
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.nextPage();
    var data = {username: this.state.user, page: this.state.page}
    for (var i = 0; i < e.target.length - 1; i++) {
      data[e.target[i].id] = e.target[i].value;
    }
    if (data.username){
      this.setState({
        user: data.username
      })
    }
    axios.post('/', data)
      .then(function (response) {
        console.log('posted data', response);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Welcome to Nozama.com</h1>
        <div>
          <Redirecting appPage={this.state.page} nextPage={this.nextPage} handleSubmit={this.handleSubmit} user={this.state.user}/>
        </div>
      </div>
    )
  }

}

window.App = App;