import React, { Component } from 'react';
import './App.css';
import { Roster, About } from './Content';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArtistList from './components/ArtistList';
import ArtistPages from './components/ArtistPages';
import Header from './components/Header';
import sortBy from 'lodash.sortby';

import { SocialIcon } from 'react-social-icons';
import { ShakeRotate } from 'reshake';

import SocialLink from './components/SocialLink';

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
                      <h2>buffalinfo</h2>
                      { About.map((paragraph, i) => <p key={i}>{paragraph}</p>) }
                      <h2>buffalos</h2>
                      <ArtistList artists={sortBy(Roster, 'name')}/>
                      <h2>buffalinks</h2>
                      <ul>
                        <li>
                          <ShakeRotate>
                            <SocialLink url="https://www.instagram.com/fatherbison/" display="@fatherbison"/>
                          </ShakeRotate>
                        </li>
                        <li>
                          <ShakeRotate>
                            <SocialLink url="https://www.facebook.com/papaBuffalinus/" display="@papaBuffalinus"/>
                          </ShakeRotate>
                        </li>
                      </ul>
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
