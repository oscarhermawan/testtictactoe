import React, { Component } from 'react';
import Fire from './config/fire'

import Game from './Game'
import Login from './Login'
import Home from './Home'

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
     <div>
      {this.state.user ? (<Game/>) : (<Login />)}
     </div>
   )
  }
}

 export default App;
