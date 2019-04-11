import React from "react";
import '../Styles/Post.css'
import ReactHtmlParser from 'react-html-parser';

const Post = (props) => (
    <div className={"card post"}>
        <div class="row">
            <div class="col-1 post-avatar-container">
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"/>
            </div>
            <div class="col-11 post-container">
                <div className="card-title post-title">Username</div>
                <div className="card-subtitle mb-2 text-muted post-subtitle">updated 0 sec ago</div>
            </div>
        </div>
        <div className={"card-body"}>
            {ReactHtmlParser(props.postBody)}
        </div>
    </div>
);

export default Post;