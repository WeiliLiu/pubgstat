import React from 'react';
import "../Styles/ItemPage.css";
import NavigationBar from '../../Home/Components/NavigationBar';
import ThreadDisplay from '../../ThreadDisplay/Component/ThreadDisplay';

export default class ItemPage extends React.Component {

    render() {
        return(
            <div>
                <NavigationBar />
                {/*{this.props.location.state.itemID}*/}
                <div className="thread-container">
                    <div className="container-fluid thread-header-container">
                        <div className="row">
                            <div className="col-12 thread-header-content">
                                <h1>{this.props.location.state.itemID}</h1>
                                <img src={this.props.location.state.img}></img>
                            </div>
                        </div>
                    </div>
                    <div className="thread-list">
                        <ThreadDisplay/>
                    </div>
                </div>
            </div>
        )
    }
}