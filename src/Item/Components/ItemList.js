import React from 'react';
import '../Styles/ItemList.css'
import NavigationBar from '../../Home/Components/NavigationBar';
import battlegrounds from "battlegrounds";
import WeaponsList from "../Components/WeaponsList";
import EquipmentList from "../Components/EquipmentList";
import UseList from "../Components/UseList";

export default class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displaySection: 'Weapons'
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.changeDisplaySection = this.changeDisplaySection.bind(this);
        this.displayLink = this.displayLink.bind(this);
    }

    componentDidMount() {

    }

    changeDisplaySection = (param) => (e) => {
        console.log(param)
        this.setState({
           displaySection: param
        });
    }

    displayLink(param) {
        if(this.state.displaySection === param) {
            return "nav-link active active-link"
        } else {
            return "nav-link inactive-link"
        }
    }

    render() {
        return(
            <div>
                <NavigationBar />

                {/* Item List */}
                <div className="table-container">
                    <h1 className="table-header">In-game Items</h1>
                    <ul className="nav nav-tabs navigation-tabs">
                        <li className="nav-item">
                            <a className={this.displayLink('Weapons')} href="#" onClick={this.changeDisplaySection('Weapons')}>Weapons</a>
                        </li>
                        <li className="nav-item">
                            <a className={this.displayLink('Equipments')} href="#" onClick={this.changeDisplaySection('Equipments')}>Equipments</a>
                        </li>
                        <li className="nav-item">
                            <a className={this.displayLink('Use')} href="#" onClick={this.changeDisplaySection('Use')}>Use</a>
                        </li>
                    </ul>
                    <WeaponsList displaySection={this.state.displaySection} />
                    <EquipmentList displaySection={this.state.displaySection} />
                    <UseList displaySection={this.state.displaySection} />
                </div>
            </div>
        )
    }
}

const api = new battlegrounds('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhYTkyOWZmMC0zMGFkLTAxMzctNTFjZC0xOTIyZDBiYzFkMzIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTUzNDY0NjE2LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctaW5mby13ZWJzIn0.exWWVTQMZcBhDgN7tufvZcdhgX4T6XWws1uyOCV4o68',
    'pc-na')