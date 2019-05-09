import React from 'react';
import Post from '../../Post/Component/Post';
import PostEditor from '../../PostEditor/Component/PostEditor';
import fire from '../../Utility/Components/FirebaseSetup';
import '../Styles/ThreadDisplay.css';
import * as SVGLoaders from 'svg-loaders-react';

class ThreadDisplay extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            userIDs: [],
            userNames: {},
            userAvatars: {},
            timeStamps: [],
            loading: false
        };

        this.addPost = this.addPost.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.displayPosts = this.displayPosts.bind(this);
        this.fetchUserInfo = this.fetchUserInfo.bind(this);
    }

    componentWillMount() {
        console.log('hello')
        let path = 'posts/' + this.props.link;
        this.setState({
            loading: true
        })
        let postRef = fire.database().ref(path).orderByKey().limitToLast(100);

        postRef.on('value', snapshot => {
            console.log("snapshot")
            console.log(snapshot.val() === null)
            if(snapshot.val() === null) {
                this.setState({
                    loading: false
                })
            }
        })

        postRef.on('child_added', snapshot => {
            console.log("snapshot" + String(snapshot))
            let post = { text: snapshot.val(), id: snapshot.key };
            let temp_post = this.state.posts;
            let temp_ID = this.state.userIDs;
            let temp_timestamp = this.state.timeStamps;
            temp_post.unshift(post.text.content);
            temp_ID.unshift(post.text.ownerID);
            temp_timestamp.unshift(post.text.timestamp);
            this.fetchUserInfo(post.text.ownerID, post.text.timestamp);
            // console.log('ownerID');
            // console.log(post.text.ownerID);
            this.setState({
                posts: temp_post,
                userIDs: temp_ID,
                timeStamps: temp_timestamp,
                loading: false
            });
        })
    }

    fetchUserInfo = (userID, key) => {
        console.log('fetchUsername')
        console.log(userID)
        let path = 'users/' + userID;
        let userRef = fire.database().ref(path).orderByKey();
        userRef.once('value', snapshot => {
            var temp_dict = this.state.userNames;
            temp_dict[key] = snapshot.val().username;
            var temp_avatars = this.state.userAvatars;
            temp_avatars[key] = snapshot.val().avatar;
            this.setState({
                userNames: temp_dict,
                userAvatars: temp_avatars
            })
        })
    }

    addPost(newPost) {
        let path = 'posts/' + this.props.link;
        fire.database().ref(path).push(newPost);
    }

    displayPosts() {
        if(this.state.loading === true) {
            return <div className="post-svg-container">
                <SVGLoaders.ThreeDots className={"loader"} fill={'black'} width={'35'}/>
            </div>
        }

        let num_posts = Object.keys(this.state.posts).length;
        let list = [];
        for(let i = 0; i < num_posts; i++) {
            // console.log(this.state.userIDs[i]);
            list.push(<Post key={i} postBody={this.state.posts[i]} userName={this.state.userNames[this.state.timeStamps[i]]}
                            userAvatar={this.state.userAvatars[this.state.timeStamps[i]]}/>)
        }
        return list;
    }

    render() {
        return (
            <div>
                {console.log('hello')}
                {console.log(this.state.userIDs)}
                {console.log(this.state.userNames)}
                {
                    this.displayPosts()
                }
                <PostEditor addPost={this.addPost} />
            </div>
        )
    }
}

export default ThreadDisplay;