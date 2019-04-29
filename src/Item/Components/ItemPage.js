import React from 'react';
import "../Styles/ItemPage.css";
import NavigationBar from '../../Home/Components/NavigationBar';
import ThreadDisplay from '../../ThreadDisplay/Component/ThreadDisplay';

export default class ItemPage extends React.Component {

    render() {
        return(
            <div>
                <NavigationBar />
                <div className="thread-container">
                    <div className="thread-inner-container">
                        <div className="container-fluid thread-header-container">
                            <div className="row">
                                <div className="col-12 thread-header-content">
                                    <h1>{this.props.match.params.id.split('_').join(' ')}</h1>
                                    <img src={require('../Images/' + this.props.match.params.id.split('_').join(' ') + '.png')}></img>
                                </div>
                            </div>
                        </div>
                        <div className="thread-list">
                            <ThreadDisplay link={this.props.match.params.id}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}