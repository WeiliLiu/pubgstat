import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../../App";
import Match from "../../Match/Components/Match";
import Player from "../../Player/Components/Player";
import ItemList from "../../Item/Components/ItemList"
import ItemPage from "../../Item/Components/ItemPage";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/match/:id" component={Match} />
            <Route path="/player/:id" component={Player} />
            <Route path="/items/" component={ItemList} />
            <Route path="/item/:id" component={ItemPage} />
        </Switch>
    </BrowserRouter>
);

export default Router;