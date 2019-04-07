import React from 'react';
import '../Styles/GameRosterListItem.css';
import {Link} from "react-router-dom";

export default class GameRosterListItem extends React.Component {
    constructor(props) {
        super(props);

        this.listTeamMembers = this.listTeamMembers.bind(this);
    }

    listTeamMembers() {
        let list = [];
        let num_members = Object.keys(this.props.roster).length;
        for(let i = 0; i < num_members; i++) {
            list.push(
                <div className="player-name">
                    <Link to={{
                        pathname: `/player/${this.props.roster[i]}`,
                        state: { playerID: this.props.roster[i] }
                    }}>
                    {this.props.roster[i]}
                    </Link>
                </div>
            )
        }
        return list;
    }

    render() {
        return(
            <div>
                {console.log(this.props.roster)}
                <div className="row container-fluid list-row">
                    <div className="col-md-3 col-4 text-center team-rank">#{this.props.rank}</div>
                    <div className="col-md-3 col-4 text-center total-kill">{this.props.totalKills}</div>
                    <div className="col-md-3 col-4 text-center total-damage">{this.props.totalDamage}</div>
                    <div className="col-md-3 col-12 text-center">{this.listTeamMembers()}</div>
                </div>
            </div>
        )
    }
}