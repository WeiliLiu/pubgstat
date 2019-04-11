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
                    <ItemListItem title={"Parachute Pack"} type={"Backpack"} image={require('../api-assets/Assets/Item/Equipment/Backpack/Item_Back_B_01_StartParachutePack_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv1 Bag"} type={"Backpack"} image={require('../api-assets/Assets/Item/Equipment/Backpack/Item_Back_E_01_Lv1_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv1 Bag"} type={"Backpack"} image={require('../api-assets/Assets/Item/Equipment/Backpack/Item_Back_E_02_Lv1_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv2 Bag"} type={"Backpack"} image={require('../api-assets/Assets/Item/Equipment/Backpack/Item_Back_F_01_Lv2_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv2 Bag"} type={"Backpack"} image={require('../api-assets/Assets/Item/Equipment/Backpack/Item_Back_F_02_Lv2_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv3 Bag"} type={"Backpack"} image={require('../api-assets/Assets/Item/Equipment/Backpack/Item_Back_C_01_Lv3_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv3 Bag"} type={"Backpack"} image={require('../api-assets/Assets/Item/Equipment/Backpack/Item_Back_C_02_Lv3_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv1 Head"} type={"Headgear"} image={require('../api-assets/Assets/Item/Equipment/Headgear/Item_Head_E_01_Lv1_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv1 Head"} type={"Headgear"} image={require('../api-assets/Assets/Item/Equipment/Headgear/Item_Head_E_02_Lv1_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv2 Head"} type={"Headgear"} image={require('../api-assets/Assets/Item/Equipment/Headgear/Item_Head_F_01_Lv2_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv2 Head"} type={"Headgear"} image={require('../api-assets/Assets/Item/Equipment/Headgear/Item_Head_F_02_Lv2_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv3 Head"} type={"Headgear"} image={require('../api-assets/Assets/Item/Equipment/Headgear/Item_Head_G_01_Lv3_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Ghillie"} type={"Jacket"} image={require('../api-assets/Assets/Item/Equipment/Jacket/Item_Ghillie_02_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Ghillie"} type={"Jacket"} image={require('../api-assets/Assets/Item/Equipment/Jacket/Item_Ghillie_01_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Apple"} type={"Throwable"} image={require('../api-assets/Assets/Item/Equipment/Throwable/Item_Weapon_Apple_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"FlashBang"} type={"Throwable"} image={require('../api-assets/Assets/Item/Equipment/Throwable/Item_Weapon_FlashBang_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Grenade"} type={"Throwable"} image={require('../api-assets/Assets/Item/Equipment/Throwable/Item_Weapon_Grenade_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Molotov"} type={"Throwable"} image={require('../api-assets/Assets/Item/Equipment/Throwable/Item_Weapon_Molotov_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"SmokeBomb"} type={"Throwable"} image={require('../api-assets/Assets/Item/Equipment/Throwable/Item_Weapon_SmokeBomb_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Snowball"} type={"Throwable"} image={require('../api-assets/Assets/Item/Equipment/Throwable/Item_Weapon_Snowball_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv1 Vest"} type={"Vest"} image={require('../api-assets/Assets/Item/Equipment/Vest/Item_Armor_E_01_Lv1_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv2 Vest"} type={"Vest"} image={require('../api-assets/Assets/Item/Equipment/Vest/Item_Armor_D_01_Lv2_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                    <ItemListItem title={"Lv3 Vest"} type={"Vest"} image={require('../api-assets/Assets/Item/Equipment/Vest/Item_Armor_C_01_Lv3_C.png')}
                                  filter={this.state.filterEquipmentType}/>
                </div>
            </div>
        )
    }
}