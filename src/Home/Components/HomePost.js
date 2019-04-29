import React from 'react';
import '../Styles/HomePost.css';
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";

export default class HomePost extends React.Component {
    render() {
        return(
            <div className="home-post-1">
                <Link to={{
                    pathname: `/posts/${this.props.post.id.split(' ').join('_')}`,
                }}><h4>{this.props.post.text.title}</h4></Link>
                <div className="homepost-userinfo-container row">
                    <div className="homepost-avatar-container">
                        <img src={this.props.userAvatar}/>
                    </div>
                    <p className="homepost-username">{this.props.userName}</p>
                </div>
                {ReactHtmlParser(this.props.post.text.body)}
            </div>
        )
    }
}