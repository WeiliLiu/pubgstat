import React from 'react';
import '../Styles/GameModeInfoCard.css';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

export default class GameModeInfoCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggled: false,
            win: '',
            loss: '',
            kill: '',
            assist: '',
            longestTimeSurvived: '',
            longestKill: '',
            headshot: '',
            maxKillStreak: '',
            top10s: '',
            rankPoint: ''
        }

        this.handleToggler = this.handleToggler.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        console.log(this.state.win)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("hello")
        console.log(parseFloat(nextProps.longestTimeSurvived).toFixed(1))
        this.setState({
            toggled: false,
            win: nextProps.win,
            loss: nextProps.loss,
            kill: nextProps.kill,
            assist: nextProps.assist,
            longestTimeSurvived: String(parseFloat(nextProps.longestTimeSurvived).toFixed(1)),
            longestKill: String(parseFloat(nextProps.longestKill).toFixed(1)),
            headshot: nextProps.headshot,
            maxKillStreak: nextProps.maxKillStreak,
            top10s: nextProps.top10s,
            rankPoint: nextProps.rankPoint
        })
    }

    handleToggler() {
        console.log(this.state.toggled)
        if(this.state.toggled === false) {
            this.setState({
                toggled: true,
                win: this.props.fpp_win,
                loss: this.props.fpp_loss,
                kill: this.props.fpp_kill,
                assist: this.props.fpp_assist,
                longestTimeSurvived: this.props.fpp_longestTimeSurvived,
                longestKill: this.props.fpp_longestKill,
                headshot: this.props.fpp_headshot,
                maxKillStreak: this.props.fpp_maxKillStreak,
                top10s: this.props.fpp_top10s,
                rankPoint: this.props.fpp_rankPoint
            })
        }else {
            this.setState({
                toggled: false,
                win: this.props.win,
                loss: this.props.loss,
                kill: this.props.kill,
                assist: this.props.assist,
                longestTimeSurvived: this.props.longestTimeSurvived,
                longestKill: this.props.longestKill,
                headshot: this.props.headshot,
                maxKillStreak: this.props.maxKillStreak,
                top10s: this.props.top10s,
                rankPoint: this.props.rankPoint
            })
        }
    }


    render() {
        return(
            <div className="card shadow-sm" data-aos="fade-left" data-aos-duration={this.props.appearTime} data-aos-delay="0">
                <div className="card-title row" style={this.props.titleStyle}>
                    <div className="col-5 card-title-text">{this.props.title}</div>
                    <div className="col-7 toggler">
                        <label className="row">
                            <div className="toggler-label">FPP</div>
                            <Toggle
                                defaultChecked={this.state.toggled}
                                onChange={this.handleToggler}
                                 />
                        </label>
                    </div>
                </div>
                <div className="card-body game-mode-card-body">
                    <div className="row win-loss">
                        <div className="col-6 text-center">
                            <h6>Wins</h6>
                            <p>{this.state.win}</p>
                        </div>
                        <div className="col-6 text-center">
                            <h6>Losses</h6>
                            <p>{this.state.loss}</p>
                        </div>
                    </div>

                    <div className="row info-batch">
                        <div className="col-6 row info-container-left">
                            <div className="info-title col-6">kills</div>
                            <div className="info-value col-6 text-center">{this.state.kill}</div>
                        </div>
                        <div className="col-6 row info-container-right">
                            <div className="info-title col-6">assists</div>
                            <div className="info-value col-6 text-center">{this.state.assist}</div>
                        </div>
                    </div>

                    <div className="row info-batch">
                        <div className="col-6 row info-container-left">
                            <div className="info-title col-6">longest kill</div>
                            <div className="info-value col-6 text-center">{this.state.longestKill}</div>
                        </div>
                        <div className="col-6 row info-container-right">
                            <div className="info-title col-6">max sur. time</div>
                            <div className="info-value col-6 text-center">{this.state.longestTimeSurvived}</div>
                        </div>
                    </div>

                    <div className="row info-batch">
                        <div className="col-6 row info-container-left">
                            <div className="info-title col-6">max kill streak</div>
                            <div className="info-value col-6 text-center">{this.state.maxKillStreak}</div>
                        </div>
                        <div className="col-6 row info-container-right">
                            <div className="info-title col-6">headshot</div>
                            <div className="info-value col-6 text-center">{this.state.headshot}</div>
                        </div>
                    </div>

                    <div className="row info-batch">
                        <div className="col-6 row info-container-left">
                            <div className="info-title col-6">top 10s</div>
                            <div className="info-value col-6 text-center">{this.state.top10s}</div>
                        </div>
                        <div className="col-6 row info-container-right">
                            <div className="info-title col-6">rank point</div>
                            <div className="info-value col-6 text-center">{this.state.rankPoint}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}