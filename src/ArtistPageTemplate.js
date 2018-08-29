import React, { Component } from 'react';
import profpic from './bufflo.png';

class ArtistPageTemplate extends Component {
    constructor(props) {
        super(props);
        this.artistImage = profpic;
        this.artistName = 'Jerry Seinfeld';
        this.artistBio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

    render() {
        return (
            <div><img src={this.artistImage} alt={this.artistName} /></div>
        );
    }
}

export default ArtistPageTemplate;