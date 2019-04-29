import React from 'react';
import '../Styles/WeaponsList.css';
import ItemListItem from "../Components/ItemListItem";

export default class EquipmentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterEquipmentType: 'All'
        };

        this.decideDisplay = this.decideDisplay.bind(this);
        this.filter = this.filter.bind(this);
    }

    filter = (param) => (e) => {
        console.log(param);
        this.setState({
            filterEquipmentType: param
        });
    }

    decideDisplay() {
        if(this.props.displaySection === 'Equipments') {
            return "padded-container"
        }else {
            return "hide-container"
        }
    }

    render() {
        return(
            <div className={this.decideDisplay()}>
                <h3>Equipments</h3>
                <div className="dropdown weapon-dropdown">
                    <button className="btn btn-secondary dropdown-toggle weapon-dropdown-toggle-button" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Equipment Type
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#" onClick={this.filter("All")}>All</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Backpack")}>Backpack</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Headgear")}>Headgear</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Jacket")}>Jacket</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Throwable")}>Throwable</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Vest")}>Vest</a>
                    </div>
                </div>
                <div className="row item-row">
                    <ItemListItem title={"Parachute Pack"} type={"Backpack"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv1 Bag 1"} type={"Backpack"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv1 Bag 2"} type={"Backpack"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv2 Bag 1"} type={"Backpack"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv2 Bag 2"} type={"Backpack"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv3 Bag 1"} type={"Backpack"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv3 Bag 2"} type={"Backpack"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv1 Head 1"} type={"Headgear"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv1 Head 2"} type={"Headgear"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv2 Head 1"} type={"Headgear"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv2 Head 2"} type={"Headgear"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv3 Head"} type={"Headgear"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Ghillie 1"} type={"Jacket"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Ghillie 2"} type={"Jacket"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Apple"} type={"Throwable"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"FlashBang"} type={"Throwable"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Grenade"} type={"Throwable"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Molotov"} type={"Throwable"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"SmokeBomb"} type={"Throwable"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Snowball"} type={"Throwable"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv1 Vest"} type={"Vest"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv2 Vest"} type={"Vest"}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv3 Vest"} type={"Vest"}
                                  filter={this.state.filterEquipmentType}/>
                </div>
            </div>
        )
    }
}