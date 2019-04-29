import React from 'react';
import '../Styles/SignUpBlock.css';
import fire from '../../Utility/Components/FirebaseSetup';
import 'firebase/auth';
import {Link, Redirect} from "react-router-dom";

export default class SignUpBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameValue: '',
            emailValue: '',
            passwordValue: '',
            loggedIn: false,
            message: '',
            messageColor: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit = (e) => {
        e.preventDefault();
        let email = this.state.emailValue;
        let password = this.state.passwordValue;
        let username = this.state.usernameValue;
        if(email === '' || password === '' || username === ''){
            this.setState({
                message: 'Inputs cannot be empty!',
                passwordValue: '',
                messageColor: 'sign-up-error-message'
            });
        } else {
            fire.auth()
                .createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    console.log(user.user.uid);
                    this.setState({
                        loggedIn: true,
                        message: 'account successfully registered, log in now',
                        messageColor: 'sign-up-success-message',
                    })
                    let user_instance = {}
                    user_instance['username'] = this.state.usernameValue;
                    var postRef = fire.database().ref().child("users");
                    postRef.child(user.user.uid).set({
                        username: this.state.usernameValue,
                        avatar: "https://img.icons8.com/nolan/96/000000/gender-neutral-user.png"
                    });
                    this.setState({
                        passwordValue: '',
                        usernameValue: '',
                        emailValue: ''
                    })
                })
                .catch((error) => {
                    console.log(error);
                    if(String(error.code) === "auth/invalid-email") {
                        this.setState({
                            message: 'invalid email',
                            passwordValue: '',
                            messageColor: 'sign-up-error-message'
                        })
                    }else if(String(error.code) === 'auth/email-already-in-use') {
                        this.setState({
                            message: 'there is already an account with this email',
                            passwordValue: '',
                            messageColor: 'sign-up-error-message'
                        })
                    }else if(String(error.code) === 'auth/weak-password') {
                        this.setState({
                            message: 'password should have at least 6 characters',
                            passwordValue: '',
                            messageColor: 'sign-up-error-message'
                        })
                    }
                })
        }
    }

    render() {
        // if(this.state.loggedIn === true) {
        //     return(
        //         <Redirect to={{
        //             pathname: `/`,
        //             state: {  }
        //         }} />
        //     )
        // }
        return(
            <div className="sign-up-section-container">
                {console.log(this.state.messageColor)}
                <h4>Create your account</h4>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control login-page-form" placeholder="Enter username"
                        onChange={this.handleInput('username')} value={this.state.usernameValue}/>
                    </div>
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
                    <p className={this.state.messageColor}>{this.state.message}</p>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
