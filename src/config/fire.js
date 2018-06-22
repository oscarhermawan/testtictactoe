import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAtQq4BiMHy4W06XIVwHLQk4ji98C1pzAo",
  authDomain: "tictactoe-test-75354.firebaseapp.com",
  databaseURL: "https://tictactoe-test-75354.firebaseio.com",
  projectId: "tictactoe-test-75354",
  storageBucket: "tictactoe-test-75354.appspot.com",
  messagingSenderId: "614288481419"
};
const fire = firebase.initializeApp(config);

export default fire;
