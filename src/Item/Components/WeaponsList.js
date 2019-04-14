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
                    <ItemListItem title={"AK47"} type={"Assault Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_AK47_C.png')}
                                     filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"AUG"} type={"Assault Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_AUG_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"AWM"} type={"Sniper Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_AWM_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"S686"} type={"Shotgun"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Berreta686_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Beryl"} type={"Assault Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_BerylM762_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"PP19"} type={"Submachine Gun"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_BizonPP19_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Cross Bow"} type={"Cross Bow"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Crossbow_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"DP28"} type={"Light Machine Gun"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_DP28_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"FN FAL"} type={"Assault Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_FNFal_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"G36C"} type={"Assault Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_G36C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Groza"} type={"Assault Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Groza_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"HK416"} type={"Assault Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_HK416_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Kar98k"} type={"Sniper Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Kar98k_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"M16A4"} type={"Assault Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_M16A4_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"M24"} type={"Sniper Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_M24_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"M249"} type={"Light Machine Gun"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_M249_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Mini14"} type={"Sniper Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Mini14_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Mk14"} type={"Sniper Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Mk14_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Mk47 Mutant"} type={"Assault Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Mk47Mutant_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"MP5K"} type={"Submachine Gun"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_MP5K_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"QBU88"} type={"Sniper Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_QBU88_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"QBZ95"} type={"Assault Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_QBZ95_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Saiga12"} type={"Shotgun"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Saiga12_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"SCAR-L"} type={"Assault Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_SCAR-L_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"SKS"} type={"Sniper Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_SKS_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Thompson"} type={"Submachine Gun"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Thompson_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"UMP"} type={"Submachine Gun"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_UMP_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"UZI"} type={"Submachine Gun"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_UZI_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Vector"} type={"Submachine Gun"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Vector_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"VSS"} type={"Sniper Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_VSS_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Win94"} type={"Sniper Rifle"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Win1894_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Winchester"} type={"Shotgun"} image={require('../api-assets/Assets/Item/Weapon/Main/Item_Weapon_Winchester_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"FlareGun"} type={"Handgun"} image={require('../api-assets/Assets/Item/Weapon/Handgun/Item_Weapon_FlareGun_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"G18"} type={"Handgun"} image={require('../api-assets/Assets/Item/Weapon/Handgun/Item_Weapon_G18_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"M9"} type={"Handgun"} image={require('../api-assets/Assets/Item/Weapon/Handgun/Item_Weapon_M9_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"M1911"} type={"Handgun"} image={require('../api-assets/Assets/Item/Weapon/Handgun/Item_Weapon_M1911_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"NagantM1895"} type={"Handgun"} image={require('../api-assets/Assets/Item/Weapon/Handgun/Item_Weapon_NagantM1895_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Rhino"} type={"Handgun"} image={require('../api-assets/Assets/Item/Weapon/Handgun/Item_Weapon_Rhino_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Sawnoff"} type={"Handgun"} image={require('../api-assets/Assets/Item/Weapon/Handgun/Item_Weapon_Sawnoff_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Skorpion"} type={"Handgun"} image={require('../api-assets/Assets/Item/Weapon/Handgun/Item_Weapon_vz61Skorpion_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Cowbar"} type={"Melee"} image={require('../api-assets/Assets/Item/Weapon/Melee/Item_Weapon_Cowbar_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Machete"} type={"Melee"} image={require('../api-assets/Assets/Item/Weapon/Melee/Item_Weapon_Machete_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Pan"} type={"Melee"} image={require('../api-assets/Assets/Item/Weapon/Melee/Item_Weapon_Pan_C.png')}
                                  filter={this.state.filterWeaponType}/>
                    <ItemListItem title={"Sickle"} type={"Melee"} image={require('../api-assets/Assets/Item/Weapon/Melee/Item_Weapon_Sickle_C.png')}
                                  filter={this.state.filterWeaponType}/>
                </div>
            </div>
        )
    }
}