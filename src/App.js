import React, { Component } from 'react';
import bufflogo from './bufflo.png';
import './App.css';
import { Roster, Mission } from './Content';
import { ShakeHorizontal } from 'reshake';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bufflogo} className="App-logo" alt="logo" />
          <h1 className="App-title">daddy buffalo</h1>
        </header>
        <p className="App-intro">good seeing u moose man</p>
        <div className="App-body">
          <div className="App-article">
            <h2>Mission</h2>
            { Mission.map((paragraph, i) => <p key={i}>{paragraph}</p>) }
            <h2>Roster</h2>
            <ul>
              { Roster.map(({name, url}, i) => <li key={i}><ShakeHorizontal><a href={url}>{name}</a></ShakeHorizontal></li>) }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
