import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SgmaniakPage from './artists/sgmaniak/SgmaniakPage';

const ArtistPages = ({match}) => {
    return (
        <div>
            <Switch>
                <Route path={`/artist/sgmaniak`} component={SgmaniakPage} />
                <Route path={`/artist/lucydk`} />
            </Switch>
        </div>
    );
};

export default ArtistPages;