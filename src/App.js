import React, { Component } from 'react';
import './App.css';
import { Roster, Mission } from './Content';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ArtistList from './ArtistList';
import ArtistPages from './ArtistPages';
import Header from './Header';
import sortBy from 'lodash.sortby';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route path="/artist/:id" component={ArtistPages}/>
            <Route render={ (props) => {
              return (
                <div>
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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
