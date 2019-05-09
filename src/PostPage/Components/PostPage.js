import React from 'react';
import '../Styles/PostPage.css';
import NavigationBar from '../../Home/Components/NavigationBar';
import fire from "../../Utility/Components/FirebaseSetup";
import ReactHtmlParser from 'react-html-parser';
import ThreadDisplay from '../../ThreadDisplay/Component/ThreadDisplay';
import ReactLoading from "react-loading";
import { animateScroll } from "react-scroll";

export default class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postTitle: '',
            postBody: '',
            ownerAvatar: '',
            ownerName: '',
            loading: false
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.displayPostContent = this.displayPostContent.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.fetchUserInfo = this.fetchUserInfo.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({
            loading: true
        })
        let path = 'homeposts/' + this.props.match.params.id;
        let postRef = fire.database().ref(path).orderByKey().limitToLast(100);
        postRef.on('child_added', snapshot => {
            let post = { text: snapshot.val(), id: snapshot.key };
            if(post.id === 'title') {
                this.setState({
                    postTitle: post.text,
                    loading: false
                })
            }else if(post.id === 'body') {
                this.setState({
                    postBody: post.text,
                    loading: false
                })
            }else if(post.id === 'ownerID') {
                this.fetchUserInfo(post.text);
            }
        })
    }

    fetchUserInfo = (userID) => {
        let path = 'users/' + userID;
        let userRef = fire.database().ref(path).orderByKey();
        userRef.once('value', snapshot => {
            console.log("userinfo")
            console.log(snapshot.val())
            this.setState({
                ownerAvatar: snapshot.val().avatar,
                ownerName: snapshot.val().username
            })
        })
    }

    scrollToBottom = (e) => {
        animateScroll.scrollToBottom();
    }

    displayPostContent() {
        if(this.state.loading === true) {
            return <div className="svg-container">
                <ReactLoading type={'spinningBubbles'} color={'black'} height={'auto'} width={35} />
            </div>
        }else {
            return <div className={"card post-page-card"}>
                <h3 className={"card-title post-page-card-title"}>{this.state.postTitle}</h3>
                <div className="post-page-userinfo-container row">
                    <div className="post-page-avatar-container">
                        <img src={this.state.ownerAvatar}/>
                    </div>
                    <p className="post-page-username">{this.state.ownerName}</p>
                </div>
                <div className={"card-body post-page-card-body"}>
                    {ReactHtmlParser(this.state.postBody)}
                    <button className="card-link btn btn-link post-page-card-link" onClick={this.scrollToBottom}><i className="fas fa-reply"></i> reply</button>
                    <a className="card-link"><i className="far fa-thumbs-up"></i> 0</a>
                    <a className="card-link"><i className="far fa-thumbs-down"></i> 0</a>
                </div>
            </div>
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('reload')
        console.log(nextProps.location.state.reload)
        if (nextProps.location.state.reload === 'desiredState') {
            window.location.reload()
        }
    }

    render() {
        return(
            <div className="post-page-container">
                <NavigationBar />
                <div className="post-page-outer-container">
                    <div className="post-page-inner-container">
                        {this.displayPostContent()}
                        <hr />
                        <ThreadDisplay link={this.props.match.params.id}/>
                    </div>
                </div>
            </div>
        )
    }
}