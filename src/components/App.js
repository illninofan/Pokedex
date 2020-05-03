import React, { Component } from 'react';
import './styles/App.css';
import PokeList from './Pokelist';

class App extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className='App'>
        <PokeList />
      </div>
    )
  }
}

export default App;
