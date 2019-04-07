import React from 'react';
import '../Styles/GameMostCard.css'

export default class GameMostCard extends React.Component {

    render() {
        return(
            <div className="card shadow-sm game-most-card" data-aos="fade-up" data-aos-duration={600 + 200 * this.props.id} data-aos-delay="0">
                <div className="card-title game-most-card-title">
                    {this.props.title}
                </div>
                <div className="card-body game-most-card-body">
                    <h1 className="card-text text-center">{this.props.value}</h1>
                    <h4 className="text-center">{this.props.player}</h4>
                </div>
            </div>
        )
    }
}