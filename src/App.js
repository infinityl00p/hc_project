import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='overlay' />
        <p className='text'>Your Team Needs You</p>
        <p className='text'>Are you up for the challenge?</p>
      </div>
    );
  }
}

export default App;
