import React from 'react';
import {Link} from "react-router-dom";

export default class Home extends React.Component {

    render() {
        return(
            <div className="Home">
                Place-holder home page, this will be implemented in a future week
                <Link to={{
                    pathname: `/player/Huya_10001CC_666`,
                    state: { playerID: 'Huya_10001CC_666' }
                }}>
                    Go To Start Player Page
                </Link>
            </div>
        )
    }
}