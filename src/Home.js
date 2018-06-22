import React, { Component } from 'react';
import Fire from './config/fire'

class Home extends Component {
  logOut() {
        Fire.auth().signOut();
    }

  render() {
    return (
      <div>
        Success Login
        <button onClick={this.logOut}>Log Out</button>
      </div>
    );
  }
}

export default Home;
