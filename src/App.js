import React, { Component } from 'react';
import './App.css';
import Home from './Home/Components/Home';

class App extends Component {

    render() {
        return (
            <div>
                {console.log('App.js reached')}
                <Home />
            </div>
        );
    }
}

export default App;
