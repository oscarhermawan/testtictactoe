import React, { Component } from 'react';
import './App.css';
import './js/index.js'

class Game extends Component {
  render() {
    return (
        <div id="tic-tac-toe">
          <div class="span3 new_span">
            <div class="row">
              <h1 class="span3">Tic Tac Toe</h1>
              <div class="span3">
                <div class="input-prepend input-append">
                <span class="add-on win_text">O won</span><strong id="o_win" class="win_times add-on">0</strong><span class="add-on">time(s)</span>
                </div>

                <div class="input-prepend input-append">
                <span class="add-on win_text">X won</span><strong id="x_win" class="win_times add-on">0</strong><span class="add-on">time(s)</span>
                </div>
              </div>
            </div>

            <ul class="row" id="game">
              <li id="one" class="btn span1" >+</li>
              <li id="two" class="btn span1">+</li>
              <li id="three" class="btn span1">+</li>
              <li id="four" class="btn span1">+</li>
              <li id="five" class="btn span1">+</li>
              <li id="six" class="btn span1">+</li>
              <li id="seven" class="btn span1">+</li>
              <li id="eight" class="btn span1">+</li>
              <li id="nine" class="btn span1">+</li>
            </ul>
            <div class="clr">&nbsp;</div>
            <div class="row"><a href="#" id="reset" class="btn-success btn span3" >Restart</a></div>
          </div>
        </div>
    );
  }
}

export default Game;
