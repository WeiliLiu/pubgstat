import React from "react";
import '../Styles/Post.css'
import ReactHtmlParser from 'react-html-parser';

const Post = (props) => (
    <div className={"post"}>
        <div class="row">
            <div class="col-3 col-md-1 post-avatar-container">
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"/>
            </div>
            <div class="card col-9 col-md-11 post-container">
                <div className="card-title post-title">Username</div>
                {/*<div className="card-subtitle mb-2 text-muted post-subtitle">updated 0 sec ago</div>*/}
                <div className={"card-body post-body"}>
                    {ReactHtmlParser(props.postBody)}
                    <a href="#" className="card-link"><i className="fas fa-reply"></i> reply</a>
                    <a href="#" className="card-link"><i className="far fa-thumbs-up"></i> 0</a>
                    <a href="#" className="card-link"><i className="far fa-thumbs-down"></i> 0</a>
                </div>
            </div>
        </div>
    </div>
);

export default Post;