import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC38DhXCjUoGU8jGF5GTz-TILUt320otCU",
    authDomain: "pubgstat-db9ba.firebaseapp.com",
    databaseURL: "https://pubgstat-db9ba.firebaseio.com",
    projectId: "pubgstat-db9ba",
    storageBucket: "pubgstat-db9ba.appspot.com",
    messagingSenderId: "501730601326"
};
var fire = firebase.initializeApp(config);
const messaging = firebase.messaging();
export default fire;
// const databaseRef = firebase.database().ref();
// export const firebaseRef = databaseRef.child('posts');