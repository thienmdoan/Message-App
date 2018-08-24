import React, { Component } from 'react';
import '../styles/App.css';

import MessageBox from './MessageBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Message Demo</h1>
        <MessageBox />
      </div>
    );
  }
}

export default App;
