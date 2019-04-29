import React from 'react';
import '../Styles/PostPage.css';
import NavigationBar from '../../Home/Components/NavigationBar';
import fire from "../../Utility/Components/FirebaseSetup";
import ReactHtmlParser from 'react-html-parser';
import ThreadDisplay from '../../ThreadDisplay/Component/ThreadDisplay';

export default class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postTitle: '',
            postBody: ''
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let path = 'homeposts/' + this.props.match.params.id;
        let postRef = fire.database().ref(path).orderByKey().limitToLast(100);
        postRef.on('child_added', snapshot => {
            let post = { text: snapshot.val(), id: snapshot.key };
            // console.log("post");
            // console.log(post.id)
            // console.log(post)
            if(post.id === 'title') {
                this.setState({
                    postTitle: post.text
                })
            }else if(post.id === 'body') {
                this.setState({
                    postBody: post.text
                })
            }
        })
    }

    render() {
        return(
            <div className="post-page-container">
                {console.log("how many times here")}
                <NavigationBar />
                <div className="post-page-outer-container">
                    <div className="post-page-inner-container">
                        <h3>{this.state.postTitle}</h3>
                        {ReactHtmlParser(this.state.postBody)}
                        <hr />
                        <ThreadDisplay link={this.props.match.params.id}/>
                    </div>
                </div>
            </div>
        )
    }
}