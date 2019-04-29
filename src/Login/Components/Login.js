import React from 'react';
import '../Styles/Login.css';
import '../../Home/Components/NavigationBar';
import NavigationBar from "../../Home/Components/NavigationBar";
import SignUpBlock from "../Components/SignUpBlock";
import LogInBlock from "../Components/LogInBlock";

export default class Login extends React.Component {

    render() {
        return(
            <div className="log-in-container">
                <NavigationBar isHome={true}/>
                <div className="log-in-inner-container shadow-lg">
                    {/* Sign up section */}
                    <SignUpBlock />
                    {/* Log in section */}
                    <LogInBlock />
                </div>
            </div>
        )
    }
}