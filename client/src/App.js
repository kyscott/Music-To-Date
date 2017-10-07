import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Paragraph from './components/Paragraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Paragraph />
      </div>
    );
  }
}

export default App;
