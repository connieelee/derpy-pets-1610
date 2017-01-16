import React from 'react';
import { Link } from 'react-router';

import logo from '../../public/logo.png';
import '../styles.css';

function Main(props) {
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
        { props.children && React.cloneElement(props.children, props) }
      </div>
    </div>
  );
}

export default Main;
