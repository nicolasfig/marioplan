import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBd433rssNxG-jtC7koNRxiTf38WopChhg",
    authDomain: "nicolasfig-marioplan.firebaseapp.com",
    databaseURL: "https://nicolasfig-marioplan.firebaseio.com",
    projectId: "nicolasfig-marioplan",
    storageBucket: "nicolasfig-marioplan.appspot.com",
    messagingSenderId: "910559902687"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({
      timestampsInSnapshots: true
  });

  export default firebase;