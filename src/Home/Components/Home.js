import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import '../Styles/Home.css';
import Leaderboard from '../Components/Leaderboard';
import UserPostsList from '../Components/UserPostsList';
import {Redirect} from "react-router";
import TwitterFeed from '../Components/TwitterFeed';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchBarValue: '',
            shouldRedirect: false
        }

        this.handleSearchBarTextChange = this.handleSearchBarTextChange.bind(this);
        this.changeRedirect = this.changeRedirect.bind(this);
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('nextProps');
    //     console.log(nextProps);
    //     if (nextProps.location.state.reload === 'desiredState') {
    //         window.location.reload()
    //     }
    // }

    // This function is responsible for listening to search bar
    // text change
    handleSearchBarTextChange(e) {
        this.setState({
            searchBarValue: e.target.value
        })
    }

    changeRedirect() {
        if(this.state.searchBarValue !== '') {
            this.setState({
                shouldRedirect: true
            })
        }
    }

    render() {
        if (this.state.shouldRedirect === true) {
            return <Redirect to={{
                pathname: `/player/${this.state.searchBarValue}`,
                state: { playerID: this.state.searchBarValue, reload: 'desiredState' }
            }} />
        }
        return(
            <div className="Home">
                {/* Start of the main home page */}
                <NavigationBar isHome={true}/>
                <div className="landing">
                    <div className="home-wrap">
                        <div className="home-inner">
                        </div>
                    </div>
                    <div className="search-bar-container">
                        <div className="input-group mb-3 main-search-bar shadow-sm">
                            <input type="text" className="form-control" placeholder="Enter Username"
                                   aria-label="Enter Username" aria-describedby="basic-addon2"
                                    onChange={this.handleSearchBarTextChange} value={this.state.searchBarValue}/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary home-search-button" type="button"
                                        onClick={this.changeRedirect}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-left-container">
                    <div className="home-content-container">
                        <div className="home-left-inner-container">
                            <TwitterFeed />
                            <Leaderboard />
                        </div>
                        <div className="user-post-container">
                            <UserPostsList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}