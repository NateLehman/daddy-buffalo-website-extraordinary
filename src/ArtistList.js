import React from 'react';
import ArtistListItem from './ArtistListItem';

const ArtistList = ({ artists }) => {
    return (
        <ul>
            { artists.map(({ name, url }, i) => <ArtistListItem key={i} url={url}>{name}</ArtistListItem>) }
        </ul>
    );
};

export default ArtistList;