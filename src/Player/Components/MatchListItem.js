import React from 'react';
import battlegrounds from "battlegrounds";
import '../Styles/MatchListItem.css';
import { Link } from "react-router-dom";

export default class MatchListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerMatchInfo: '',
            gameMode: '',
            rank: 0,
            won: false,
            loading: false
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.checkMatchOutcome = this.checkMatchOutcome.bind(this);
        this.decideButtonColor = this.decideButtonColor.bind(this);
        this.decideShow = this.decideShow.bind(this);
    }

    componentDidMount() {
        api.getMatch({id: this.props.matchID})
            .then(response => {
                let rosters = response.rosters;
                let num_rosters = Object.keys(rosters).length;
                var player_index;
                var roster_index;
                for(let roster = 0; roster < num_rosters; roster++) {
                    let num_participants = rosters[roster].participants.length;
                    for(let participant = 0; participant < num_participants; participant++ ){
                        if(rosters[roster].participants[participant].attributes.stats.playerId === this.props.playerID) {
                            roster_index = roster;
                            player_index = participant;
                        }
                    }
                }
                this.setState({
                    playerMatchInfo: rosters[roster_index].participants[player_index].attributes.stats,
                    rank: rosters[roster_index].attributes.stats.rank,
                    won: rosters[roster_index].attributes.won,
                    gameMode: response.attributes.gameMode,
                    loading: true
                })
                console.log(response)
                console.log(roster_index)
                console.log(player_index)
            })
            .catch(error => {
                console.log(error);
            })
    }

    checkMatchOutcome(won) {
        if(won === 'true') {
            return <div className="btn outcome this-btn">won</div>
        }else {
            return <div className="btn this-btn">lost</div>
        }
    }

    decideHeader(gamemode) {
        return <div className="squad-header btn this-btn col2">{this.state.gameMode.toUpperCase()}</div>
    }

    decideListType() {
        let gameMode = this.state.gameMode.toUpperCase();
        if(gameMode === 'SOLO' || gameMode === 'SOLO-FPP') {
            return "row item-container-solo shadow-sm"
        }else if(gameMode === 'DUO' || gameMode === 'DUO-FPP') {
            return "row item-container-duo shadow-sm"
        } else {
            return "row item-container-squad shadow-sm"
        }
    }

    decideAnimationDelay(id) {
        if(id < 6) {
            return 600 + 100 * id;
        }else {
            return 600;
        }
    }

    decideButtonColor() {
        let gameMode = this.state.gameMode.toUpperCase();
        if(gameMode === 'SOLO' || gameMode === 'SOLO-FPP') {
            return <div className="col-md-2 col-12 text-center detail-box-solo">
                <Link to={{
                    pathname: `/match/${this.props.matchID}`,
                    state: { matchID: this.props.matchID }
                }}><div className="btn this-btn detail-button">details</div></Link>
            </div>
        }else if(gameMode === 'DUO' || gameMode === 'DUO-FPP') {
            return <div className="col-md-2 col-12 text-center detail-box-duo">
                <Link to={{
                    pathname: `/match/${this.props.matchID}`,
                    state: { matchID: this.props.matchID }
                }}><div className="btn this-btn detail-button">details</div></Link>
            </div>
        }else {
            return <div className="col-md-2 col-12 text-center detail-box-squad">
                <Link to={{
                    pathname: `/match/${this.props.matchID}`,
                    state: { matchID: this.props.matchID }
                }}><div className="btn this-btn detail-button">details</div></Link>
            </div>
        }
    }

    decideShow() {
        console.log(this.props.filterMode)
        console.log(this.state.gameMode)
        if(this.props.filterMode === 'all' || this.props.filterMode === this.state.gameMode ||
            (this.props.filterMode === 'topTen' && this.state.rank < 10)) {
            return <div data-aos="fade-right" data-aos-duration={this.decideAnimationDelay(this.props.id)} data-aos-delay="0">
                <div className={this.decideListType()}>
                    <div className="col-md-2 col-12 text-center game-mode-box">
                        <div className="list-item-title">mode</div>
                        <div className="btn this-btn">{this.state.gameMode.toUpperCase()}</div>
                    </div>
                    <div className="col-md-2 col-6 text-center result-box">
                        <div className="list-item-title">result</div>
                        {this.checkMatchOutcome(this.state.won)}
                    </div>
                    <div className="col-md-2 col-6 text-center rank-box">
                        <div className="list-item-title">rank</div>
                        <div className="btn this-btn rank">#{this.state.rank}</div>
                    </div>
                    <div className="col-md-2 col-6 text-center damage-box">
                        <div className="list-item-title">damage</div>
                        <div className="btn this-btn">{String(parseFloat(this.state.playerMatchInfo.damageDealt).toFixed(1))}</div>
                    </div>
                    <div className="col-md-2 col-6 text-center kills-box">
                        <div className="list-item-title">kills</div>
                        <div className="btn this-btn">{this.state.playerMatchInfo.kills}</div>
                    </div>
                    {this.decideButtonColor()}
                </div>
            </div>
        }else {
            return
        }
    }

    render() {
        return(
            <div>
                {this.decideShow()}
            </div>
        )
    }
}

const api = new battlegrounds('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhYTkyOWZmMC0zMGFkLTAxMzctNTFjZC0xOTIyZDBiYzFkMzIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTUzNDY0NjE2LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctaW5mby13ZWJzIn0.exWWVTQMZcBhDgN7tufvZcdhgX4T6XWws1uyOCV4o68',
    'pc-na')