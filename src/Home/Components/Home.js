import React from 'react';
import {Link} from "react-router-dom";

export default class Home extends React.Component {

    render() {
        return(
            <div>
                Place-holder home page, this will be implemented in a future week
                <Link to={{
                    pathname: `/player/Huya_HeiMao-`,
                    state: { playerID: 'Huya_HeiMao-' }
                }}>
                    Go To Start Player Page
                </Link>
            </div>
        )
    }
}