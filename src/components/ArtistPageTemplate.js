import React, { Component } from 'react';
import profpic from '../bufflo.png';
import '../App.css';
import SocialLink from './SocialLink';

class ArtistPageTemplate extends Component {
    image = profpic;
    name = 'Jerry Seinfeld';
    bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    socialLinks = [
        { url: 'https://www.instagram.com/fatherbison/', display: '@fatherbison' },
        { url: 'https://www.facebook.com/papaBuffalinus/', display: '@papaBuffalinus' },
    ];

    render() {
        return (
            <div className="App-body">
                <div className="App-article">
                    <h1>{this.name}</h1>
                    <p>{this.bio}</p>
                    <h2>links</h2>
                    <ul>{ this.socialLinks.map(props => <li><SocialLink {...props}/></li>) }</ul>
                </div>
            </div>
        );
    }
}

export default ArtistPageTemplate;