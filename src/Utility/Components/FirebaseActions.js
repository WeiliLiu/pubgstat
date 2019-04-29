// import {firebaseRef} from "../Components/FirebaseSetup";
// const FETCH_POST = 'FETCH_POST';
//
// // This function is responsible for adding a new post on the database
// export const addPost = newPost => async dispatch => {
//     firebaseRef.push().set(newPost);
// };
//
// // Deleting a post from the database
// export const deletePost = PostToDelete => async dispatch => {
//     firebaseRef.child(PostToDelete).remove();
// };
//
// // Fetching a post from the database
// export const getPost = () => async dispatch => {
//     firebaseRef.on("value", snapshot => {
//         dispatch({
//             type: FETCH_POST,
//             payload: snapshot.val()
//         });
//     });
// };