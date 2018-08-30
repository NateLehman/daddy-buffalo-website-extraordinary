import React, { Component } from 'react';
import profpic from '../bufflo.png';
import '../App.css';

class ArtistPageTemplate extends Component {
    artistImage = profpic;
    artistName = 'JerrySeinfeld';
    artistBio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    render() {
        return (
            <div className="App-body">
                <div className="App-article">
                    <h1>{this.artistName}</h1>
                    <p>{this.artistBio}</p>
                </div>
            </div>
        );
    }
}

export default ArtistPageTemplate;