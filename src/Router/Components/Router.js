import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../../App";
import Match from "../../Match/Components/Match";
import Player from "../../Player/Components/Player";
import ItemList from "../../Item/Components/ItemList"
import ItemPage from "../../Item/Components/ItemPage";
import PostPage from "../../PostPage/Components/PostPage";
import Login from "../../Login/Components/Login";
import Profile from "../../Profile/Components/Profile";

const Router = () => (


    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/posts/:id" component={PostPage} />
            <Route path="/match/:id" component={Match} />
            <Route path="/player/:id" component={Player} />
            <Route path="/items/" component={ItemList} />
            <Route path="/item/:id" component={ItemPage} />
            <Route path="/login/" component={Login}/>
            <Route path="/profile/:id" component={Profile} />
        </Switch>
    </BrowserRouter>
);

export default Router;