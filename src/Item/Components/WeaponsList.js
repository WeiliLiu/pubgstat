import React from 'react';
import '../Styles/WeaponsList.css';
import ItemListItem from '../Components/ItemListItem';

export default class WeaponsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterWeaponType: 'All'
        };

        this.filter = this.filter.bind(this);
        this.decideDisplay = this.decideDisplay.bind(this);
    }

    filter = (param) => (e) => {
        console.log(param);
        this.setState({
            filterWeaponType: param
        });
    }

    decideDisplay() {
        if(this.props.displaySection === 'Weapons') {
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
                    <button className="btn dropdown-toggle weapon-dropdown-toggle-button" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Weapon Type
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#" onClick={this.filter("All")}>All</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Assault Rifle")}>Assault Rifle</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Sniper Rifle")}>Sniper Rifle</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Shotgun")}>Shotgun</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Submachine Gun")}>Submachine Gun</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Cross Bow")}>Cross Bow</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Light Machine Gun")}>Light Machine Gun</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Handgun")}>Handgun</a>
                        <a className="dropdown-item" href="#" onClick={this.filter("Melee")}>Melee</a>
                    </div>
                </div>
                <div className="row item-row">
                    <ItemListItem title={"AK47"} type={"Assault Rifle"}
                                     filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"AUG"} type={"Assault Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"AWM"} type={"Sniper Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"S686"} type={"Shotgun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Beryl"} type={"Assault Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"PP19"} type={"Submachine Gun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Cross Bow"} type={"Cross Bow"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"DP28"} type={"Light Machine Gun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"FN FAL"} type={"Assault Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"G36C"} type={"Assault Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Groza"} type={"Assault Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"HK416"} type={"Assault Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Kar98k"} type={"Sniper Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"M16A4"} type={"Assault Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"M24"} type={"Sniper Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"M249"} type={"Light Machine Gun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Mini14"} type={"Sniper Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Mk14"} type={"Sniper Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Mk47 Mutant"} type={"Assault Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"MP5K"} type={"Submachine Gun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"QBU88"} type={"Sniper Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"QBZ95"} type={"Assault Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Saiga12"} type={"Shotgun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"SCAR-L"} type={"Assault Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"SKS"} type={"Sniper Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Thompson"} type={"Submachine Gun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"UMP"} type={"Submachine Gun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"UZI"} type={"Submachine Gun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Vector"} type={"Submachine Gun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"VSS"} type={"Sniper Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Win94"} type={"Sniper Rifle"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Winchester"} type={"Shotgun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"FlareGun"} type={"Handgun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"G18"} type={"Handgun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"M9"} type={"Handgun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"M1911"} type={"Handgun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"NagantM1895"} type={"Handgun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Rhino"} type={"Handgun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Sawnoff"} type={"Handgun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Skorpion"} type={"Handgun"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Cowbar"} type={"Melee"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Machete"} type={"Melee"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Pan"} type={"Melee"}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Sickle"} type={"Melee"}
                                  filter={this.state.filterWeaponType}/>
                </div>
            </div>
        )
    }
}