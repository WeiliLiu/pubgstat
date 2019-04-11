import React from 'react';
import '../Styles/ItemListItem.css';
import { Link } from "react-router-dom";

export default class ItemListItem extends React.Component {
    constructor(props) {
        super(props);

        this.decideShow = this.decideShow.bind(this);
    }

    decideShow() {
        console.log(this.props.type)
        console.log(this.props.filter)
        if (this.props.filter === 'All' || this.props.filter === this.props.type) {
            return "col-6 col-md-2 item-card-container";
        } else {
            return "hide-card";
        }
    }

    render() {
        return(
            <div className={this.decideShow()}>
                <div className={"card item-card shadow-sm"}>
                    <img className="card-img-top item-img" src={this.props.image}></img>
                    <div className="card-body item-body">
                        <Link to={{
                            pathname: `/item/${this.props.title.split(' ').join('_')}`,
                            state: { itemID: this.props.title }
                        }}><h6 className="card-title item-title">{this.props.title}</h6></Link>
                        <p className="card-subtitle">{this.props.type}</p>
                    </div>
                </div>
            </div>
        )
    }
}