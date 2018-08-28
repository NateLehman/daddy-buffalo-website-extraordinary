import React from 'react';
import { Link } from 'react-router-dom';
import { ShakeHorizontal } from 'reshake';

const ArtistListItem = ({ children, url }) => {
    return (
        <li>
            <ShakeHorizontal>
                <Link to={url}>{children}</Link>
            </ShakeHorizontal>
        </li>
    );
};

export default ArtistListItem;