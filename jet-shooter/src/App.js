import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import World from './components/World'

class App extends Component {
 

  render() {
    return (
        <div style={{position:"absolute", backgroundImage: 'url(https://www.macleans.ca/wp-content/uploads/2014/07/stars-carousel.jpg)', height: "100%", width: "100%"}}>
        <World />
        </div>
    );
  }
}

export default App;
