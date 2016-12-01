import React, { Component } from 'react';
import { Link } from 'react-router';

import { catsData, dogsData } from './data';
import logo from './logo.png';
import './styles.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      cats: catsData,
      dogs: dogsData,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/all"><img src={logo} className="App-logo" alt="logo" /></Link>
          <h3>derpy pets</h3>
        </div>

        <div className="container cat-or-dog">
          <div className="row">
            <Link to="/cats" className="btn-flat btn-large col s5">I WANT A MEOWER</Link>
            <Link to="/dogs" className="btn-flat btn-large col s5 offset-s2">I WANT A BARKER</Link>
          </div>
        </div>

        <div className="App-content container-fluid">
          {
            this.props.children && React.cloneElement(this.props.children, {
              cats: this.state.cats,
              dogs: this.state.dogs
            })
          }
        </div>
      </div>
    );
  }
}

export default Main;
