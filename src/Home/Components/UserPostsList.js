import React from 'react';
import '../Styles/UserPostList.css';
import HomePostsEditor from '../Components/HomePostsEditor';
import fire from '../../Utility/Components/FirebaseSetup';
import HomePost from '../Components/HomePost';

export default class UserPostsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            userIDs: [],
            timeStamps: [],
            userNames: {},
            userAvatars: {}
        }

        this.addPost = this.addPost.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.displayPosts = this.displayPosts.bind(this);
        this.fetchUserInfo = this.fetchUserInfo.bind(this);
    }

    componentWillMount() {
        let path = 'homeposts';
        let postRef = fire.database().ref(path).orderByChild('timeStamp').limitToLast(100);
        postRef.on('child_added', snapshot => {
            let post = { text: snapshot.val(), id: snapshot.key };
            let temp_post = this.state.posts;
            let temp_ID = this.state.userIDs;
            let temp_timestamp = this.state.timeStamps;
            temp_ID.unshift(post.text.ownerID);
            temp_timestamp.unshift(post.text.timeStamp);
            temp_post.unshift(post);
            this.fetchUserInfo(post.text.ownerID, post.text.timeStamp);
            this.setState({
                posts: temp_post,
                userIDs: temp_ID,
                timeStamps: temp_timestamp
            });
        })
    }

    fetchUserInfo = (userID, key) => {
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

    // This function is responsible for adding a new post to the database
    addPost(newPost) {
        if(newPost.title !== '') {
            var postRef = fire.database().ref().child("homeposts");
            var title = newPost.title.split('.').join('')
            title = title.split('?').join('')
            title = title.split('#').join('')
            title = title.split('[').join('')
            title = title.split(']').join('')
            title = title.split(',').join('')
            title = title.split(' ').join('_')
            postRef.child(title).set({
                title: newPost.title,
                body: newPost.body,
                ownerID: newPost.ownerID,
                timeStamp: new Date().getTime()
            });
        }
    }

    displayPosts() {
        var list = [];
        var list_length = Object.keys(this.state.posts).length;
        for(let i = 0; i < list_length; i++) {
            list.push(<HomePost key={i} post={this.state.posts[i]} userName={this.state.userNames[this.state.timeStamps[i]]}
                                userAvatar={this.state.userAvatars[this.state.timeStamps[i]]}/>)
        }
        return list;
    }

    render() {
        return(
            <div className="home-post-container">
                <HomePostsEditor addPost={this.addPost} />
                {/*Start of actual list of posts*/}
                {this.displayPosts()}
            </div>
        )
    }
}