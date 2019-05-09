import React from 'react';
import '../Styles/PostPage.css';
import NavigationBar from '../../Home/Components/NavigationBar';
import fire from "../../Utility/Components/FirebaseSetup";
import ReactHtmlParser from 'react-html-parser';
import ThreadDisplay from '../../ThreadDisplay/Component/ThreadDisplay';
import * as SVGLoaders from 'svg-loaders-react';

export default class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postTitle: '',
            postBody: '',
            loading: false
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.displayPostContent = this.displayPostContent.bind(this);
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
            // console.log("post");
            // console.log(post.id)
            // console.log(post)
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
            }
        })
    }

    displayPostContent() {
        if(this.state.loading === true) {
            return <div className="svg-container">
                <SVGLoaders.ThreeDots className={"loader"} fill={'black'} width={'35'}/>
            </div>
        }else {
            return <div>
                <h3>{this.state.postTitle}</h3>
                {ReactHtmlParser(this.state.postBody)}
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
                {console.log("how many times here")}
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