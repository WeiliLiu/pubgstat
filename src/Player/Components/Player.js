import React from 'react';
import '../Styles/Player.css';
import battlegrounds from 'battlegrounds';
import GameModeInfoCard from "./GameModeInfoCard";
import MatchList from '../Components/MatchList';

export default class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerID: '',
            playerName: '',
            playerSeasonStatsSolo: '',
            playerSeasonStatsFppSolo: '',
            playerSeasonStatsDuo: '',
            playerSeasonStatsFppDuo: '',
            playerSeasonStatsSquad: '',
            playerSeasonStatsFppSquad: '',
            matchIDList: '',
            loading: false
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        api.getPlayers({ names: [this.props.location.state.playerID] })
            .then(response => {
                let playerData = response[0]
                let numMatch = Object.keys(playerData.matches).length;
                var tempIDList = [];
                if(numMatch <= 20) {
                    for(let i = 0; i < numMatch; i++) {
                        tempIDList.push(playerData.matches[i].id);
                    }
                } else {
                    for(let i = 0; i < 20; i++) {
                        tempIDList.push(playerData.matches[i].id);
                    }
                }
                this.setState({
                    playerID: playerData.id,
                    playerName: playerData.attributes.name,
                    matchIDList: tempIDList,
                    loading: true
                })
                return String(response[0].id)
            })
            .then(playerID => {
                return api.getPlayerSeason({ id: playerID, season_id: "division.bro.official.pc-2018-02" })
            })
            .then(response => {
                console.log(response.attributes.gameModeStats)
                this.setState({
                    playerSeasonStatsSolo: response.attributes.gameModeStats.solo,
                    playerSeasonStatsFppSolo: response.attributes.gameModeStats['solo-fpp'],
                    playerSeasonStatsDuo: response.attributes.gameModeStats.duo,
                    playerSeasonStatsFppDuo: response.attributes.gameModeStats['duo-fpp'],
                    playerSeasonStatsSquad: response.attributes.gameModeStats.squad,
                    playerSeasonStatsFppSquad: response.attributes.gameModeStats['squad-fpp'],
                    loading: true
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return(
            <div className="container-fluid outside-container">
                <nav className="navbar navbar-custom shadow-sm primary-navbar">
                    <a className="navbar-brand" href="#">PUBGstat</a>
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
                                <a className="nav-link home-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link resume-link" href="#">Player</a>
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
                <div className="row justify-content-center playerContainer">
                    <div className="col-12 playerNameBar shadow-sm">
                        <div className="playerName">{this.state.playerName}</div>
                    </div>
                </div>
                <div className="row justify-content-center bottom-half">
                    <div className="col-12 row full-container">
                        <div className="col-sm-12 col-md-8 match-list-col">
                            <div className="container-fluid match-list-container">
                                <MatchList matchIDList={this.state.matchIDList} playerID={this.state.playerID}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 game-mode-info-col">
                            <div className="container-fluid game-mode-info-container">
                                <GameModeInfoCard
                                    title="Solo"
                                    titleStyle={{ backgroundColor: '#1bbc9d' }}
                                    win={this.state.playerSeasonStatsSolo.wins} fpp_win={this.state.playerSeasonStatsFppSolo.wins}
                                    loss={this.state.playerSeasonStatsSolo.losses} fpp_loss={this.state.playerSeasonStatsFppSolo.losses}
                                    kill={this.state.playerSeasonStatsSolo.kills} fpp_kill={this.state.playerSeasonStatsFppSolo.kills}
                                    assist={this.state.playerSeasonStatsSolo.assists} fpp_assist={this.state.playerSeasonStatsFppSolo.assists}
                                    longestKill={String(parseFloat(this.state.playerSeasonStatsSolo.longestKill).toFixed(1))}
                                    fpp_longestKill={String(parseFloat(this.state.playerSeasonStatsFppSolo.longestKill).toFixed(1))}
                                    longestTimeSurvived={String(parseFloat(this.state.playerSeasonStatsSolo.longestTimeSurvived).toFixed(1))}
                                    fpp_longestTimeSurvived={String(parseFloat(this.state.playerSeasonStatsFppSolo.longestTimeSurvived).toFixed(1))}
                                    headshot={this.state.playerSeasonStatsSolo.headshotKills}
                                    fpp_headshot={this.state.playerSeasonStatsFppSolo.headshotKills}
                                    maxKillStreak={this.state.playerSeasonStatsSolo.maxKillStreaks}
                                    fpp_maxKillStreak={this.state.playerSeasonStatsFppSolo.maxKillStreaks}
                                    top10s={this.state.playerSeasonStatsSolo.top10s} fpp_top10s={this.state.playerSeasonStatsFppSolo.top10s}
                                    rankPoint={String(parseFloat(this.state.playerSeasonStatsSolo.rankPoints).toFixed(1))}
                                    fpp_rankPoint={String(parseFloat(this.state.playerSeasonStatsFppSolo.rankPoints).toFixed(1))}
                                    appearTime={"1000"}
                                />
                                <GameModeInfoCard
                                    title="Duo"
                                    titleStyle={{ backgroundColor: '#e77e23' }}
                                    win={this.state.playerSeasonStatsDuo.wins} fpp_win={this.state.playerSeasonStatsFppDuo.wins}
                                    loss={this.state.playerSeasonStatsDuo.losses} fpp_loss={this.state.playerSeasonStatsFppDuo.losses}
                                    kill={this.state.playerSeasonStatsDuo.kills} fpp_kill={this.state.playerSeasonStatsFppDuo.kills}
                                    assist={this.state.playerSeasonStatsDuo.assists} fpp_assist={this.state.playerSeasonStatsFppDuo.assists}
                                    longestKill={String(parseFloat(this.state.playerSeasonStatsDuo.longestKill).toFixed(1))}
                                    fpp_longestKill={String(parseFloat(this.state.playerSeasonStatsFppDuo.longestKill).toFixed(1))}
                                    longestTimeSurvived={String(parseFloat(this.state.playerSeasonStatsDuo.longestTimeSurvived).toFixed(1))}
                                    fpp_longestTimeSurvived={String(parseFloat(this.state.playerSeasonStatsFppDuo.longestTimeSurvived).toFixed(1))}
                                    headshot={this.state.playerSeasonStatsDuo.headshotKills}
                                    fpp_headshot={this.state.playerSeasonStatsFppDuo.headshotKills}
                                    maxKillStreak={this.state.playerSeasonStatsDuo.maxKillStreaks}
                                    fpp_maxKillStreak={this.state.playerSeasonStatsFppDuo.maxKillStreaks}
                                    top10s={this.state.playerSeasonStatsDuo.top10s} fpp_top10s={this.state.playerSeasonStatsFppDuo.top10s}
                                    rankPoint={String(parseFloat(this.state.playerSeasonStatsDuo.rankPoints).toFixed(1))}
                                    fpp_rankPoint={String(parseFloat(this.state.playerSeasonStatsFppDuo.rankPoints).toFixed(1))}
                                    appearTime={"1400"}
                                />
                                <GameModeInfoCard
                                    title="Squad"
                                    titleStyle={{ backgroundColor: '#2a80b9' }}
                                    win={this.state.playerSeasonStatsSquad.wins} fpp_win={this.state.playerSeasonStatsFppSquad.wins}
                                    loss={this.state.playerSeasonStatsSquad.losses} fpp_loss={this.state.playerSeasonStatsFppSquad.losses}
                                    kill={this.state.playerSeasonStatsSquad.kills} fpp_kill={this.state.playerSeasonStatsFppSquad.kills}
                                    assist={this.state.playerSeasonStatsSquad.assists} fpp_assist={this.state.playerSeasonStatsFppSquad.assists}
                                    longestKill={String(parseFloat(this.state.playerSeasonStatsSquad.longestKill).toFixed(1))}
                                    fpp_longestKill={String(parseFloat(this.state.playerSeasonStatsFppSquad.longestKill).toFixed(1))}
                                    longestTimeSurvived={String(parseFloat(this.state.playerSeasonStatsSquad.longestTimeSurvived).toFixed(1))}
                                    fpp_longestTimeSurvived={String(parseFloat(this.state.playerSeasonStatsFppSquad.longestTimeSurvived).toFixed(1))}
                                    headshot={this.state.playerSeasonStatsSquad.headshotKills}
                                    fpp_headshot={this.state.playerSeasonStatsFppSquad.headshotKills}
                                    maxKillStreak={this.state.playerSeasonStatsSquad.maxKillStreaks}
                                    fpp_maxKillStreak={this.state.playerSeasonStatsFppSquad.maxKillStreaks}
                                    top10s={this.state.playerSeasonStatsSquad.top10s} fpp_top10s={this.state.playerSeasonStatsFppSquad.top10s}
                                    rankPoint={String(parseFloat(this.state.playerSeasonStatsSquad.rankPoints).toFixed(1))}
                                    fpp_rankPoint={String(parseFloat(this.state.playerSeasonStatsFppSquad.rankPoints).toFixed(1))}
                                    appearTime={"1800"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const api = new battlegrounds('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhYTkyOWZmMC0zMGFkLTAxMzctNTFjZC0xOTIyZDBiYzFkMzIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTUzNDY0NjE2LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctaW5mby13ZWJzIn0.exWWVTQMZcBhDgN7tufvZcdhgX4T6XWws1uyOCV4o68',
    'pc-na')