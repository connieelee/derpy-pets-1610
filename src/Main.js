import React, { Component } from 'react';

// import AnimalsList from './AnimalsList';
// import AnimalProfile from './AnimalProfile';

import { catsData, dogsData } from './data';
import logo from './logo.png';
import './styles.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      view: 'all',
      cats: catsData,
      dogs: dogsData,
      selectedAnimal: {}
    };
  }

  changeView(view) {
    /* TODO */
  }

  selectAnimal(selectedAnimal) {
    /* TODO */
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>derpy pets</h3>
        </div>

        <div className="container cat-or-dog">
          <div className="row">
            <button className="btn-flat btn-large col s5">I WANT A MEOWER</button>
            <button className="btn-flat btn-large col s5 offset-s2">I WANT A BARKER</button>
          </div>
        </div>

        <div className="App-content container-fluid">
          {/* TODO: VIEWS GO HERE */}
        </div>
      </div>
    );
  }
}

export default Main;
