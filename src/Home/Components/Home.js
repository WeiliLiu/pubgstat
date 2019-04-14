import React from 'react';
import {Link} from "react-router-dom";
import NavigationBar from '../Components/NavigationBar';

export default class Home extends React.Component {

    render() {
        return(
            <div className="Home">
                <NavigationBar />
                <div className="landing">
                    <div className="home-wrap">
                        <div className="home-inner">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}