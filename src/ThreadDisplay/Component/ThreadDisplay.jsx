import React from 'react';
import Post from '../../Post/Component/Post';
import PostEditor from '../../PostEditor/Component/PostEditor'

class ThreadDisplay extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }

        this.addPost = this.addPost.bind(this);
    }

    addPost(newPost) {
        let newPostBody = this.state.posts;
        newPostBody.unshift(newPost);
        this.setState({
            posts: newPostBody
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map((postBody, idx) => {
                        return (
                            <Post key={idx} postBody={postBody} />
                        )
                    })
                }
                <PostEditor addPost={this.addPost} />
            </div>
        )
    }
}

export default ThreadDisplay;