import React from 'react';
import bufflogo from './bufflo0.png';
import './App.css';
import './SlimHeader.css';

import { Switch, Route, Link } from 'react-router-dom';

const Header = () => {
    return (
        <Switch>
            <Route path="/artist/:id" render={() => (
                <header className="SlimHeader-header">
                    <Link to="/">
                        <img src={bufflogo} className="SlimHeader-logo" alt="daddy buffalo logo" />
                    </Link>
                    <h1 className="SlimHeader-title">daddy buffalo</h1>
                </header>
            )} />
            <Route render={() => (
                <header className="App-header">
                    <img src={bufflogo} className="App-logo" alt="daddy buffalo logo" />
                    <h1 className="App-title">daddy buffalo</h1>
                </header>
            )}/>
        </Switch>
    );
};

export default Header;