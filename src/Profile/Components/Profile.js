import React from 'react';
import '../Styles/Profile.css';
import fire from '../../Utility/Components/FirebaseSetup';
import NavigationBar from '../../Home/Components/NavigationBar';
import {Link, Redirect} from "react-router-dom";
import { askForPermissionToReceiveNotifications } from "../../PushNotification/Components/PushNotification";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            userAvatar: '',
            files: []
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.displayChangeSection = this.displayChangeSection.bind(this);
        this.setRef = ref => {
            this.file = ref;
        }
        this.handleUpload = this.handleUpload.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        let path = 'users/' + this.props.match.params.id;
        console.log(path);
        let userRef = fire.database().ref(path).orderByKey();
        userRef.on('value', snapshot => {
            let user = { text: snapshot.val(), id: snapshot.key };
            this.setState({
                userName: user.text.username,
                userAvatar: user.text.avatar,
                isLoggedIn: true
            })
        })
    }

    handleChange = (e) => {
        console.log('file selected')
        console.log(e.target.files)
        this.setState({
            files: e.target.files
        })
    }

    handleUpload() {
        const storageRef = fire.storage().ref();
        const mainImage = storageRef.child(this.state.files[0].name);
        console.log(this.state.files[0].name)
        mainImage.put(this.state.files[0]).then((snapshot) => {
            mainImage.getDownloadURL().then((url) => {
                console.log(url)
                let path = 'users/' + this.props.match.params.id;
                let userRef = fire.database().ref(path);
                userRef.update({'avatar': url});
            })
        })
        // window.location.reload()
    }

    displayChangeSection() {
        if(localStorage.getItem('pubgstat_isLoggedIn') === 'true' &&
            localStorage.getItem('pubgstat_userUID') === String(this.props.match.params.id)) {
            return <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Change your profile picture</label>
                        <input type="file" ref={this.setRef} className="form-control-file"
                               id="exampleFormControlFile1" onChange={this.handleChange}/>
                    </div>
                </form>
                <button className="btn btn-success" onClick={this.handleUpload}>Upload</button>
            </div>
        }else {
            return
        }
    }

    render() {
        return(
            <div>
                <NavigationBar />
                <div className="profile-page-outer-container">
                    <div className="profile-main-info-container row">
                        <div className="profile-avatar-container">
                            <img className="shadow" src={this.state.userAvatar}/>
                        </div>
                        <div className="profile-page-username-container">
                            <h1 className="profile-page-username">
                                {this.state.userName}
                            </h1>
                        </div>
                    </div>
                    {this.displayChangeSection()}
                    <div>
                        <button className="btn btn-success" onClick={askForPermissionToReceiveNotifications} >
                            Receive Notifications
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}