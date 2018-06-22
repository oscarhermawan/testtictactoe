import React, { Component } from 'react';
import Game from './Game.js'

class App extends Component {
  render() {
    return (
      <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

        <Game></Game>
      </div>
    );
  }
}

export default App;
