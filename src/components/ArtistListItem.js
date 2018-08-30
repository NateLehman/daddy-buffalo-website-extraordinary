import React from 'react';
import { Link } from 'react-router-dom';
import { ShakeRotate } from 'reshake';

const ArtistListItem = ({ children, url }) => {
    return (
        <li>
            <ShakeRotate>
                <Link to={url}>{children}</Link>
            </ShakeRotate>
        </li>
    );
};

export default ArtistListItem;