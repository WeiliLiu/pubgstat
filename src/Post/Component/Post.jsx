import React from "react";
import '../Styles/Post.css'
import ReactHtmlParser from 'react-html-parser';
import fire from "../../Utility/Components/FirebaseSetup";

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={"post"}>
                <div className="post-row">
                    <div className="post-avatar-container">
                        <img src={this.props.userAvatar}/>
                    </div>
                    <div className="card post-container">
                        <div className="card-title post-title">{this.props.userName}</div>
                        <div className={"card-body post-body"}>
                            {ReactHtmlParser(this.props.postBody)}
                            <a href="#" className="card-link"><i className="fas fa-reply"></i> reply</a>
                            <a href="#" className="card-link"><i className="far fa-thumbs-up"></i> 0</a>
                            <a href="#" className="card-link"><i className="far fa-thumbs-down"></i> 0</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}