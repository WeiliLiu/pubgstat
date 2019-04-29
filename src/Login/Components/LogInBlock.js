import React from 'react';
import '../Styles/LogInBlock.css';
import fire from "../../Utility/Components/FirebaseSetup";
import {Link, Redirect} from "react-router-dom";

export default class LogInBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameValue: '',
            emailValue: '',
            passwordValue: '',
            error: '',
            loggedIn: false,
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.emailValue === '' || this.state.passwordValue === ''){
            this.setState({
                error: 'Inputs cannot be empty!',
                passwordValue: '',
            });
        }else {
            const email = this.state.emailValue;
            const password = this.state.passwordValue;
            fire.auth()
                .signInWithEmailAndPassword(email, password)
                .then((user) => {
                    console.log(user);
                    localStorage.setItem('pubgstat_isLoggedIn', true);
                    localStorage.setItem('pubgstat_userUID', user.user.uid)
                    console.log(localStorage.getItem('pubgstat_userUID'))
                    this.setState({
                        loggedIn: true
                    })
                })
                .catch((error) => {
                    console.log(error.code)
                    if(String(error.code) === 'auth/user-not-found') {
                        this.setState({
                            error: 'User not found! Try again!',
                            passwordValue: ''
                        })
                    }else if(String(error.code) === 'auth/wrong-password') {
                        this.setState({
                            error: 'Wrong password! Try again!',
                            passwordValue: ''
                        })
                    }
                })
        }
    }

    handleInput = (param) => (e) => {
        if(param === 'username') {
            this.setState({
                usernameValue: e.target.value
            })
        }else if(param === 'email') {
            this.setState({
                emailValue: e.target.value
            })
        }else {
            this.setState({
                passwordValue: e.target.value
            })
        }
    }

    render() {
        if(this.state.loggedIn === true) {
            return(
                <Redirect to={{
                    pathname: `/`,
                    state: {  }
                }} />
            )
        }
        return(
            <div className="log-in-section-container">
                <h4>Login with your account</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control login-page-form" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter email"
                               onChange={this.handleInput('email')} value={this.state.emailValue}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email
                            with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control login-page-form" id="exampleInputPassword1"
                               placeholder="Password" onChange={this.handleInput('password')}
                               value={this.state.passwordValue}/>
                    </div>
                    <p className="login-error-message">{this.state.error}</p>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}