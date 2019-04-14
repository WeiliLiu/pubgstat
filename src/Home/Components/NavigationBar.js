import React from 'react';
import {Link, Redirect} from "react-router-dom";
import '../Styles/NavigationBar.css';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            searchBarText: '',
            shouldRedirect: false,
        }

        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    focus() {
        console.log("focused")
        this.setState({
            focused: true
        });
    }

    blur() {
        this.setState({
            focused: false
        })
    }

    decide_icon_style() {
        if(this.state.focused === true){
            return "input-group-text search-icon-focused"
        }else {
            return "input-group-text search-icon"
        }
    }

    handleTextChange(event) {
        this.setState({
            searchBarText: event.target.value
        })
    }

    handleKeyPress(target) {
        if(target.charCode==13 && this.state.focused === true && this.state.searchBarText !== ''){
            this.setState({
                shouldRedirect: true
            })
        }
    }

    render() {
        if (this.state.shouldRedirect === true) {
            return <Redirect to={{
                pathname: `/player/${this.state.searchBarText}`,
                state: { playerID: this.state.searchBarText, reload: 'desiredState' }
            }} />
        }
        return(
            <div className="navbar-wrapper">
                <nav className="navbar navbar-light navbar-expand-md shadow-sm primary-navbar shadow-md">
                    <a className="navbar-brand" href="#"><img src={require('../../Item/api-assets/Assets/Logos/PUBG_Icon_Black.png')}></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link link-for-navbar" to={{pathname: `/`,}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link-for-navbar" to={{pathname: `/items/`,}}>Items</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-for-navbar" href="#">Leaderboards</a>
                            </li>
                            <li className="nav-item">
                                <div className="search-form input-group">
                                    <div className="input-group-prepend">
                                        <span className={this.decide_icon_style()} id="basic-addon1"><i
                                            className="fas fa-search"></i></span>
                                    </div>
                                    <input className="user-search-bar" type="search" placeholder="Search"
                                    onFocus={this.focus} onBlur={this.blur} onChange={this.handleTextChange}
                                    value={this.state.searchBarText} onKeyPress={this.handleKeyPress}></input>
                                </div>
                            </li>
                        </ul>
                        {/*<Link to={{*/}
                        {/*    pathname: `/player/${this.state.searchBarText}`,*/}
                        {/*    state: { playerID: this.state.searchBarText, reload: 'desiredState' }*/}
                        {/*}}>Submit</Link>*/}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button type="button" className="btn btn-outline-secondary log-in-button">Log in</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}