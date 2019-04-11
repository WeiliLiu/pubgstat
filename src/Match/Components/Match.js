import React from 'react';
import battlegrounds from "battlegrounds";
import '../Styles/Match.css';
import GameMostCard from '../Components/GameMostCard';
import GameRosterListItem from '../Components/GameRosterListItem';
import NavigationBar from '../../Home/Components/NavigationBar';

export default class Match extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            matchRosters: '',
            rosterRanks: '',
            rosterTotalKills: '',
            rosterTotalDamage: '',
            gameInfo: '',
            mostKills: 0,
            mostKillsPlayer: '',
            highestDamage: 0,
            highestDamagePlayer: '',
            largestKillStreak: 0,
            largestKillStreakPlayer: '',
            loading: false
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.renderRosterList = this.renderRosterList.bind(this);
        this.sort = this.sort.bind(this);
    }

    componentDidMount() {
        api.getMatch({id: this.props.location.state.matchID})
            .then(response => {
                // console.log(response)

                let num_rosters = Object.keys(response.rosters).length;
                var most_kills = 0;
                var most_kills_player = '';
                var highest_damage = 0;
                var highest_damage_player = '';
                var largest_kill_streak = 0;
                var largest_kill_streak_player = '';
                var rosters = [];
                var roster_stats = [];
                var roster_total_kills = [];
                var roster_total_damage = [];
                for(let i = 0; i < num_rosters; i++) {
                    // console.log(response.rosters[i].participants)
                    roster_stats.push(response.rosters[i].attributes.stats.rank)
                    let num_participants = Object.keys(response.rosters[i].participants).length;
                    var cur_total_kills = 0;
                    var cur_total_damage = 0;
                    var cur_roster = [];
                    for(let j = 0; j < num_participants; j++) {
                        // console.log(response.rosters[i].participants[j].attributes.stats.kills)
                        let cur_kill = response.rosters[i].participants[j].attributes.stats.kills;
                        let cur_damage = response.rosters[i].participants[j].attributes.stats.damageDealt;
                        let cur_kill_streak = response.rosters[i].participants[j].attributes.stats.killStreaks;
                        let cur_player = response.rosters[i].participants[j].attributes.stats.name;
                        if(cur_kill > most_kills) {
                            most_kills = cur_kill;
                            most_kills_player = response.rosters[i].participants[j].attributes.stats.name;
                        }
                        if(cur_damage > highest_damage) {
                            highest_damage = cur_damage;
                            highest_damage_player = response.rosters[i].participants[j].attributes.stats.name;
                        }
                        if(cur_kill_streak > largest_kill_streak) {
                            largest_kill_streak = cur_kill_streak;
                            largest_kill_streak_player = response.rosters[i].participants[j].attributes.stats.name;
                        }
                        cur_total_kills += response.rosters[i].participants[j].attributes.stats.kills;
                        cur_total_damage += response.rosters[i].participants[j].attributes.stats.damageDealt;
                        cur_roster.push(cur_player);
                    }
                    roster_total_kills.push(cur_total_kills);
                    roster_total_damage.push(cur_total_damage);
                    rosters.push(cur_roster);
                }

                this.setState({
                    gameInfo: response.attributes,
                    matchRosters: rosters,
                    rosterRanks: roster_stats,
                    rosterTotalKills: roster_total_kills,
                    rosterTotalDamage: roster_total_damage,
                    mostKills: most_kills,
                    mostKillsPlayer: most_kills_player,
                    highestDamage: highest_damage,
                    highestDamagePlayer: highest_damage_player,
                    largestKillStreak: largest_kill_streak,
                    largestKillStreakPlayer: largest_kill_streak_player
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    renderRosterList() {
        var list = []
        // console.log(this.state.matchRosters[1])
        let roster_length = Object.keys(this.state.rosterRanks).length;
        for(let i = 0; i < roster_length; i++) {
            list.push(
                <GameRosterListItem key={i}
                                    roster={this.state.matchRosters[i]}
                                    rank={this.state.rosterRanks[i]}
                                    totalKills={this.state.rosterTotalKills[i]}
                                    totalDamage={String(parseFloat(this.state.rosterTotalDamage[i]).toFixed(1))}
                />
            )
        }
        return list
    }

    sort = (param) => (e) => {
        let count = Object.keys(this.state.rosterRanks).length;
        let dict = []
        for(let i = 0; i < count; i++) {
            var data = {}
            data['rank'] = this.state.rosterRanks[i];
            data['kills'] = this.state.rosterTotalKills[i];
            data['damage'] = this.state.rosterTotalDamage[i];
            data['members'] = this.state.matchRosters[i];
            dict.push(data)
        }

        let data_to_sort = JSON.parse(JSON.stringify(this.state.rosterRanks));
        let sorted_data = [];
        if(param === 'rank') {
            sorted_data = dict.sort(function(item1, item2) {
                return item1[param] - item2[param];
            })
        }else {
            sorted_data = dict.sort(function(item1, item2) {
                return item2[param] - item1[param];
            })
        }

        let sorted_rosters = [];
        let sorted_total_kills = [];
        let sorted_total_damage = [];
        let sorted_rank = [];
        for(let i = 0; i < count; i++) {
            sorted_rank.push(dict[i]['rank']);
            sorted_rosters.push(dict[i]['members']);
            sorted_total_kills.push(dict[i]['kills']);
            sorted_total_damage.push(dict[i]['damage']);
        }
        this.setState({
            matchRosters: sorted_rosters,
            rosterTotalKills: sorted_total_kills,
            rosterTotalDamage: sorted_total_damage,
            rosterRanks: sorted_rank
        })
    }

    render() {
        return(
            <div>
                {/* Navbar Section */}
                <NavigationBar />
                {/* match overview section */}
                <div className="row justify-content-center match-overview-container">
                    <div className="col-12 match-overview shadow-sm" data-aos="fade-up" data-aos-duration={400} data-aos-delay="0">
                        <h4>Match Overview</h4>
                        <hr />
                        <div className="row match-info-row">
                            <div className="col-md-4 col-sm-12">
                                <div className="match-overview-title">game mode</div>
                                <div className="match-overview-value">{this.state.gameInfo.gameMode}</div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="match-overview-title">time started</div>
                                <div className="match-overview-value">{this.state.gameInfo.createdAt}</div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="match-overview-title">duration</div>
                                <div className="match-overview-value">{this.state.gameInfo.duration}</div>
                            </div>
                        </div>
                        <div className="row match-info-row">
                            <div className="col-md-4 col-sm-12">
                                <div className="match-overview-title">map</div>
                                <div className="match-overview-value">{this.state.gameInfo.mapName}</div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="match-overview-title">number of teams</div>
                                <div className="match-overview-value">{Object.keys(this.state.matchRosters).length}</div>
                            </div>
                        </div>
                    </div>
                    {/* Three most info cards section */}
                    <div className="col-12 row most-cards">
                        <div className="col-md-4 col-sm-12">
                            <GameMostCard title="Most Kills"
                                          id={1}
                                          value={this.state.mostKills}
                                          player={this.state.mostKillsPlayer}
                            />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <GameMostCard title="Highest Damage"
                                          id={2}
                                          value={String(parseFloat(this.state.highestDamage).toFixed(1))}
                                          player={this.state.highestDamagePlayer}
                            />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <GameMostCard title="Largest Kill Streaks"
                                          id={3}
                                          value={this.state.largestKillStreak}
                                          player={this.state.largestKillStreakPlayer}
                            />
                        </div>
                    </div>
                    {/* Roster List Section */}
                    <div className={"col-12 container-fluid roster-list-container shadow-sm"} data-aos="fade-up" data-aos-duration={1500} data-aos-delay="0">
                        <div className="row list-title-row">
                            <div className="col-md-3 col-4 text-center rank-title-box" onClick={this.sort('rank')}>Rank</div>
                            <div className="col-md-3 col-4 text-center rank-title-box" onClick={this.sort('kills')}>Team Kills</div>
                            <div className="col-md-3 col-4 text-center rank-title-box" onClick={this.sort('damage')}>Team Damage</div>
                            <div className="col-md-3 col-4 text-center member-title">Team Members</div>
                        </div>
                        {this.renderRosterList()}
                    </div>
                </div>
            </div>
        )
    }
}

const api = new battlegrounds('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhYTkyOWZmMC0zMGFkLTAxMzctNTFjZC0xOTIyZDBiYzFkMzIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTUzNDY0NjE2LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctaW5mby13ZWJzIn0.exWWVTQMZcBhDgN7tufvZcdhgX4T6XWws1uyOCV4o68',
    'pc-na')