import React from 'react';
import '../Styles/LeaderboardList.css';
import axios from "axios";
import ReactLoading from 'react-loading';

export default class LeaderboardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: '',
            playersRank: '',
            playersRankPoints: '',
            loading: false
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.fillTable = this.fillTable.bind(this);
        this.sortLeaderBoard = this.sortLeaderBoard.bind(this);
        this.apiCall = this.apiCall.bind(this);
        this.showLoading = this.showLoading.bind(this);
    }

    apiCall(gameMode) {
        this.setState({
            loading: true
        })
        let validateStatus = status => {
            return status == 200 || status == 401 || status == 404 || status == 415 || status == 429 || status == 400
        }
        var url = '/leaderboards/' + gameMode + '?page[number]=0';
        return axios({ url, baseURL, headers, validateStatus })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.gameMode !== this.props.gameMode) {
            this.apiCall(nextProps.gameMode)
                .then(response => {
                    console.log(response.data.data.attributes.gameMode);
                    var data = response.data.included;
                    var data_length = Object.keys(data).length;
                    var temp_players = [];
                    var temp_players_rank = [];
                    var temp_players_rankPoints = [];
                    for(let i = 0; i < data_length; i++) {
                        if(data[i].attributes.rank <= 10) {
                            temp_players.push(data[i].attributes.name);
                            temp_players_rank.push(data[i].attributes.rank);
                            temp_players_rankPoints.push(data[i].attributes.stats.rankPoints);
                        }
                    }
                    this.setState({
                        players: temp_players,
                        playersRank: temp_players_rank,
                        playersRankPoints: temp_players_rankPoints,
                        length: data_length,
                        loading: false
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    componentDidMount() {
        this.apiCall(this.props.gameMode)
            .then(response => {
                // console.log(response.data);
                var data = response.data.included;
                var data_length = Object.keys(data).length;
                var temp_players = [];
                var temp_players_rank = [];
                var temp_players_rankPoints = [];
                for(let i = 0; i < data_length; i++) {
                    if(data[i].attributes.rank <= 10) {
                        temp_players.push(data[i].attributes.name);
                        temp_players_rank.push(data[i].attributes.rank);
                        temp_players_rankPoints.push(data[i].attributes.stats.rankPoints);
                    }
                }
                // console.log(temp_players);
                // console.log(temp_players_rank);
                // console.log(temp_players_rankPoints);
                this.setState({
                    players: temp_players,
                    playersRank: temp_players_rank,
                    playersRankPoints: temp_players_rankPoints,
                    length: data_length,
                    loading: false
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    sortLeaderBoard() {
        let dict = [];
        // console.log(Object.keys(this.state.players).length);
        for(let i = 0; i < Object.keys(this.state.players).length; i++) {
            var data = {};
            data['rank'] = this.state.playersRank[i];
            data['name'] = this.state.players[i];
            data['rankPoints'] = this.state.playersRankPoints[i];
            dict.push(data);
        }
        // let data_to_sort = JSON.parse(JSON.stringify(this.state.playersRanks));
        let sorted_data = dict.sort(function(item1, item2) {
            return item1['rank'] - item2['rank'];
        })
        return sorted_data
    }

    fillTable() {
        if(this.state.loading === false) {
            var tableBody = []
            var sorted_data = this.sortLeaderBoard();
            for(let i = 0; i < Object.keys(this.state.players).length; i++) {
                tableBody.push(
                    <tr key={i}>
                        <th scope="row">{sorted_data[i]['rank']}</th>
                        <td>{sorted_data[i]['name']}</td>
                        <td>{sorted_data[i]['rankPoints']}</td>
                    </tr>
                )
            }
            return tableBody;
        }
    }

    showLoading() {
        if(this.state.loading === true) {
            return <div className="svg-container">
                <ReactLoading type={'spinningBubbles'} color={'black'} height={'auto'} width={35} />
            </div>
        }
    }

    render() {
        return(
            <div>
                <table className="table table-striped leaderboard-table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">RP</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.fillTable()}
                    </tbody>
                </table>
                {this.showLoading()}
            </div>
        )
    }
}

const baseURL = 'https://api.pubg.com/shards/steam'
const headers = {
    'Authorization': `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhYTkyOWZmMC0zMGFkLTAxMzctNTFjZC0xOTIyZDBiYzFkMzIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTUzNDY0NjE2LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctaW5mby13ZWJzIn0.exWWVTQMZcBhDgN7tufvZcdhgX4T6XWws1uyOCV4o68`,
    'Accept': 'application/vnd.api+json'
}

