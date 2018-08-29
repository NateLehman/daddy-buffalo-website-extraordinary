import React, { Component } from 'react';
import bufflogo from './bufflo0.png';
import './App.css';
import { Roster, Mission } from './Content';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ArtistList from './ArtistList';
import ArtistPages from './ArtistPages';
import sortBy from 'lodash.sortby';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/artist/:id" component={ArtistPages}/>
        <Route render={ (props) => {
          return (
            <div className="App">
              <header className="App-header">
                <img src={bufflogo} className="App-logo" alt="daddy buffalo logo" />
                <h1 className="App-title">daddy buffalo</h1>
              </header>
              <p className="App-intro">good seeing u moose man</p>
              <div className="App-body">
                <div className="App-article">
                  <h2>Mission</h2>
                  { Mission.map((paragraph, i) => <p key={i}>{paragraph}</p>) }
                  <h2>Roster</h2>
                  <ArtistList artists={sortBy(Roster, 'name')}/>
                </div>
              </div>
            </div>
          );
        } }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
