import React from 'react';
import '../Styles/WeaponsList.css';
import ItemListItem from "./ItemListItem";

export default class UseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterUseType: 'All'
        };

        this.filter = this.filter.bind(this);
        this.decideDisplay = this.decideDisplay.bind(this);
    }

    filter = (param) => (e) => {
        console.log(param);
        this.setState({
            filterUseType: param
        });
    }

    decideDisplay() {
        if(this.props.displaySection === 'Use') {
            return "padded-container"
        }else {
            return "hide-container"
        }
    }

    render() {
        return(
            <div className={this.decideDisplay()}>
                <h3>Weapons</h3>
                <div className="dropdown weapon-dropdown">
                    <button className="btn btn-secondary dropdown-toggle weapon-dropdown-toggle-button" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Use Type
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#" onClick={this.filter("All")}>All</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Boost")}>Boost</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Fuel")}>Fuel</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Heal")}>Heal</a>
                    </div>
                </div>
                <div className="row item-row">
                    <ItemListItem title={"Syringe"} type={"Boost"}
                                  filter={this.state.filterUseType}/>
                    <ItemListItem title={"Energy Drink"} type={"Boost"}
                                  filter={this.state.filterUseType}/>
                    <ItemListItem title={"Pain Killer"} type={"Boost"}
                                  filter={this.state.filterUseType}/>
                    <ItemListItem title={"Jerry Can"} type={"Fuel"}
                                  filter={this.state.filterUseType}/>
                    <ItemListItem title={"Bandage"} type={"Heal"}
                                  filter={this.state.filterUseType}/>
                    <ItemListItem title={"First-Aid"} type={"Heal"}
                                  filter={this.state.filterUseType}/>
                    <ItemListItem title={"Med-Kit"} type={"Heal"}
                                  filter={this.state.filterUseType}/>
                </div>
            </div>
        )
    }
}