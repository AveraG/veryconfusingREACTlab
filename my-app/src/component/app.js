import ReactDOM from "react-dom";
import React, { Component } from 'react';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      inputValue: '',
      hasLoaded: false,
      loading: 'Loading...'
    };
  }

  addThing(event) {
    if (this.state.hasLoaded === true) {
      let saveEventValue = event.target.value;
      this.setState({ text: saveEventValue });
    } else {
      // let saveEventValue = event.target.value;
      this.setState({ loading: 'Loading...' });
    }
  }

  btnClick() {
    this.setState(prevState => ({
      hasLoaded: !prevState.hasLoaded
    }));
    console.log(this.state.hasLoaded);
  }

  componentDidMount() {
    this.setState({ hasLoaded: true });
  }

  render() {
    const hasLoaded = this.state.hasLoaded;
    return (
      <React.Fragment>
        <h1>{hasLoaded ? this.state.text : this.state.loading}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.addThing.bind(this)} />
        </form>
        <button onClick={() => this.btnClick()}>click me</button>

      </React.Fragment>

    );
  }
}

// function App(props) {
//   return <h1>{greeting}</h1>
// }

export default App;