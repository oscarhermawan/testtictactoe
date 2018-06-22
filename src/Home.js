import React, { Component } from 'react';
import Fire from './config/fire'
import Game from './Game'

class Home extends Component {
  logOut() {
        Fire.auth().signOut();
    }

  render() {
    return (
      <div>
        SUCCESS LOGIN
        <button onClick={this.logOut}>Log Out</button>
      </div>
    );
  }
}

export default Home;
