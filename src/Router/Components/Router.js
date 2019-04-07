import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../../App";
import Match from "../../Match/Components/Match";
import Player from "../../Player/Components/Player";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/match/:id" component={Match} />
            <Route path="/player/:id" component={Player} />
        </Switch>
    </BrowserRouter>
);

export default Router;