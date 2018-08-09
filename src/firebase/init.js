import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAd39ET_g1CPF0BaQ08EgiFNvZCfkX9VQ0",
    authDomain: "dazzling-pier-210814.firebaseapp.com",
    databaseURL: "https://dazzling-pier-210814.firebaseio.com",
    projectId: "dazzling-pier-210814",
    storageBucket: "dazzling-pier-210814.appspot.com",
    messagingSenderId: "240230416155"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
    timestampsInSnapshots: true
})

//export firestore database
export default firebaseApp.firestore()
