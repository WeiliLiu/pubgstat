import React from "react";
import '../Styles/PostEditor.css'
import ReactQuill from 'react-quill';

class PostEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            newPostBody: '',
        }

        this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    handlePostEditorInputChange(e) {
        this.setState({
            newPostBody: e
        })
    }

    createPost() {
        this.props.addPost(this.state.newPostBody);
        this.setState({
            newPostBody: '',
        })
    }

    render() {
        return (
            <div className={"card post-editor"}>
                <div className={"card-body"}>
                    <ReactQuill
                        value={this.state.newPostBody}
                        onChange={this.handlePostEditorInputChange}
                        placeholder={"Start Typing here ..."}
                        style={{ height: '10rem', marginBottom: '4rem' }}
                    />
                    <button className={"btn btn-success post-editor-button"} onClick={this.createPost}>Post</button>
                </div>
            </div>
        )
    }
}

export default PostEditor;