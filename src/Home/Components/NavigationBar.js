import React from 'react';
import {Link, Redirect} from "react-router-dom";
import '../Styles/NavigationBar.css';
import fire from "../../Utility/Components/FirebaseSetup";

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            searchBarText: '',
            shouldRedirect: false,
            loggedIn: false,
            userName: '',
            userAvatar: '',
            userUID: '',
            toRefresh: false,
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.renderAtHome = this.renderAtHome.bind(this);
        this.showLogin = this.showLogin.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    componentDidMount() {
        if(localStorage.getItem('pubgstat_isLoggedIn') === null || localStorage.getItem('isLoggedIn') === 'false') {
            this.setState({
                loggedIn: false,
                userName: '',
                userAvatar: ''
            })
        }
        if(localStorage.getItem('pubgstat_isLoggedIn') === 'true'){
            // console.log(localStorage.getItem('pubgstat_userUID'));
            let userUID = localStorage.getItem('pubgstat_userUID');
            this.setState({
                userUID: userUID
            });
            let path = 'users/' + String(userUID);
            let userRef = fire.database().ref(path).orderByKey()
            userRef.on('child_added', snapshot => {
                let user = { text: snapshot.val(), id: snapshot.key };
                console.log(user.text);
                if(user.id === 'username') {
                    this.setState({
                        userName: user.text
                    })
                }
                if(user.id === 'avatar') {
                    this.setState({
                        userAvatar: user.text
                    })
                }
            })
            this.setState({
                loggedIn: true
            })
        }
        // console.log(this.state.loggedIn);
    }

    focus() {
        // console.log("focused")
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

    renderAtHome() {
        if(this.props.isHome === true) {
            return "navbar navbar-light navbar-expand-md shadow-sm primary-navbar shadow-md fixed-top"
        }else {
            return "navbar navbar-light navbar-expand-md shadow-sm primary-navbar shadow-md"
        }
    }

    showLogin() {
        // console.log(this.state.loggedIn)
        if(this.state.loggedIn === false) {
            return <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={{pathname: `/login/`}}>
                        <button type="button" className="btn btn-outline-secondary log-in-button">Log in</button>
                    </Link>
                </li>
            </ul>
        }else {
            return <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <div className="btn-group">
                        <button type="button" className="btn btn-link dropdown-toggle navbar-dropdown-btn"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="navbar-avatar-container">
                                <img src={this.state.userAvatar}/>
                            </div>
                            {this.state.userName}
                        </button>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown-menu">
                            <Link to={{pathname: `/profile/${this.state.userUID}`}}>
                                <button className="dropdown-item" type="button">Profile</button>
                            </Link>
                            <button className="dropdown-item" type="button">Settings</button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" type="button" onClick={this.handleSignOut}>
                                <i className="fas fa-sign-out-alt navbar-dropdown-menu-icon"></i>
                                Log out
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        }
    }

    handleSignOut() {
        localStorage.setItem('pubgstat_isLoggedIn', false);
        localStorage.getItem('pubgstat_isLoggedIn');
        window.location.reload();
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
                {/*{this.renderLogin()}*/}
                {console.log(this.state.loggedIn)}
                <nav className={this.renderAtHome()}>
                    <Link className="navbar-brand"
                          to={{pathname: `/`}}>
                        <img src={require('../Images/PUBG_Icon_Black.png')}></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link link-for-navbar" to={{pathname: `/`}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link-for-navbar" to={{pathname: `/items/`,}}>Items</Link>
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
                        {this.showLogin()}
                    </div>
                </nav>
            </div>
        )
    }
}