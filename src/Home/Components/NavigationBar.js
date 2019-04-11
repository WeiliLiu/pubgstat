import React from 'react';
import {Link} from "react-router-dom";
import '../Styles/NavigationBar.css';

export default class NavigationBar extends React.Component {

    render() {
        return(
            <div className="navbar-wrapper">
                <nav className="navbar navbar-custom shadow-sm primary-navbar shadow-lg">
                    <a className="navbar-brand" href="#"><img src={require('../../Item/api-assets/Assets/Logos/PUBG_Icon_Black.png')}></img></a>
                    <form className="form-inline">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </form>
                </nav>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link resume-link" to={{pathname: `/`,}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link resume-link" to={{pathname: `/items/`,}}>Items</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link about-link" href="#">Leaderboards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link skill-link" href="#">Sign in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link experience-link" href="#">Sign up</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}