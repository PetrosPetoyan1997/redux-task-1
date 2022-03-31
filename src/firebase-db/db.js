import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCNlNnkMdGbox35Q5_wDmE_0dQdXNw2Ix4",
    databaseURL: 'https://redux-task-5c4f7-default-rtdb.europe-west1.firebasedatabase.app',
    authDomain: "redux-task-5c4f7.firebaseapp.com",
    projectId: "redux-task-5c4f7",
    storageBucket: "redux-task-5c4f7.appspot.com",
    messagingSenderId: "168019229243",
    appId: "1:168019229243:web:373a2d9b18b25a0b313a1e"
};

const app = initializeApp(firebaseConfig);

export default app