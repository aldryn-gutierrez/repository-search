import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return <b>Hello World</b>
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
