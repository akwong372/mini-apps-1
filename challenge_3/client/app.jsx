class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1
    };
  }

  render() {
    return (
      <div>
        <h1>A React Component</h1>
        <h2>test state {this.state.test}</h2>
      </div>
    )
  }

}

window.App = App;