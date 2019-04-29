import React from 'react';
import '../Styles/HomePostsEditor.css';
import ReactQuill from 'react-quill';

export default class HomePostsEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postTitle: '',
            postBody: '',
            message: '',
            ownerID: ''
        }

        this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
        this.handlePostTileFormChange = this.handlePostTileFormChange.bind(this);
        this.createPost = this.createPost.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let userUID = localStorage.getItem('pubgstat_userUID');
        this.setState({
            ownerID: userUID
        });
    }

    createPost() {
        if(localStorage.getItem('pubgstat_isLoggedIn') === 'true') {
            if(this.state.postTitle !== '') {
                var newPost = {};
                newPost['title'] = this.state.postTitle;
                newPost['body'] = this.state.postBody;
                newPost['ownerID'] = this.state.ownerID;
                this.props.addPost(newPost);
                this.setState({
                    postTitle: '',
                    postBody: '',
                })
            }
        } else {
            this.setState({
                message: 'you need to log in before posting',
            })
        }
    }

    handlePostEditorInputChange(e) {
        this.setState({
            postBody: e
        })
    }

    handlePostTileFormChange(e) {
        this.setState({
            postTitle: e.target.value
        })
    }

    render() {
        return(
            <div className="home-post-editor-container">
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control home-post-title-editor"
                               placeholder="Enter a one line title..." value={this.state.postTitle}
                               onChange={this.handlePostTileFormChange}/>
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <ReactQuill
                            value={this.state.postBody}
                            onChange={this.handlePostEditorInputChange}
                            placeholder={"Start Typing here ..."}
                            style={{ height: 'auto' }}
                        />
                    </div>
                </form>
                <p className="post-editor-error-message">{this.state.message}</p>
                <button className="btn btn-success" onClick={this.createPost}>Post</button>
            </div>
        )
    }
}