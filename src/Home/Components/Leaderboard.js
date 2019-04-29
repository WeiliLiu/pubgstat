import React from 'react';
import '../Styles/Leaderboard.css';
import axios from 'axios';
import LeaderboardList from '../Components/LeaderboardList';

export default class Leaderboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameMode: 'solo'
        }

        this.changeMode = this.changeMode.bind(this);
    }

    // This function is used to change the game mode the leaderboard
    // is referring to
    changeMode = (e) => {
        // console.log(e.target.value);
        this.setState({
            gameMode: e.target.value
        })
    }

    render() {
        return(
            <div className="leaderboard-container">
                <div className="leaderboard-top-half">
                    <h3>Leaderboards</h3>
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.changeMode}>
                        <option value="solo" selected>Solo</option>
                        <option value="solo-fpp">Solo FPP</option>
                        <option value="duo">Duo</option>
                        <option value="duo-fpp">Duo FPP</option>
                        <option value="squad">Squad</option>
                        <option value="squad-fpp">Squad FPP</option>
                    </select>
                </div>
                <LeaderboardList gameMode={this.state.gameMode}/>
            </div>
        )
    }
}