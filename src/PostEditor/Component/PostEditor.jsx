import React from "react";
import '../Styles/PostEditor.css'
import ReactQuill from 'react-quill';
import fire from "../../Utility/Components/FirebaseSetup";

class PostEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            newPostBody: '',
            message: '',
            ownerID: '',
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    componentDidMount() {
        let userUID = localStorage.getItem('pubgstat_userUID');
        console.log(userUID);
        this.setState({
            ownerID: userUID
        });
    }

    handlePostEditorInputChange(e) {
        this.setState({
            newPostBody: e
        })
    }

    createPost() {
        if(localStorage.getItem('pubgstat_isLoggedIn') === 'true') {
            var newPostBody = {};
            newPostBody['content'] = this.state.newPostBody;
            newPostBody['ownerID'] = this.state.ownerID;
            newPostBody['timestamp'] = new Date().getTime();

            this.props.addPost(newPostBody);
            this.setState({
                newPostBody: '',
                message: '',
            })
        } else {
            this.setState({
                message: 'you need to log in before posting',
            })
        }
    }

    render() {
        return (
            <div className={"card post-editor"}>
                <div className={"card-body post-editor-body"}>
                    <ReactQuill
                        value={this.state.newPostBody}
                        onChange={this.handlePostEditorInputChange}
                        placeholder={"Start Typing here ..."}
                        style={{ height: '10rem', marginBottom: '4rem' }}
                    />
                    <p className="post-editor-error-message">{this.state.message}</p>
                    <button className={"btn btn-success post-editor-button"} onClick={this.createPost}>Post</button>
                </div>
            </div>
        )
    }
}

export default PostEditor;