import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SgmaniakPage from './artists/sgmaniak/SgmaniakPage';

const unfinished = () => <div>under construction lmao</div>;

const ArtistPages = () => {
    return (
        <div>
            <Switch>
                <Route path="/artist/sgmaniak" component={SgmaniakPage} />
                <Route path="/artist/lucydk" component={unfinished} />
                <Route path="/artist/jaeantwi" component={unfinished} />
                <Route path="/artist/lackhoney" component={unfinished} />
            </Switch>
        </div>
    );
};

export default ArtistPages;