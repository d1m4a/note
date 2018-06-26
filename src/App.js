import React, { Component } from 'react';

import Header from "./components/header/header";
import Items from "./components/items/items";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h2 className="heading">Полезняшки и муть</h2>
        <Items/>
      </div>
    );
  }
}

export default App;
