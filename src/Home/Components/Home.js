import React from 'react';
import {Link} from "react-router-dom";

export default class Home extends React.Component {

    render() {
        return(
            <div className="Home">
                Place-holder home page, this will be implemented in a future week
                <Link to={{
                    pathname: `/player/XiGuaTv_600600`,
                    state: { playerID: 'XiGuaTv_600600' }
                }}>
                    Go To Start Player Page
                </Link>
            </div>
        )
    }
}