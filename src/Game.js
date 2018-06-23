import React, { Component } from 'react';
import Fire from './config/fire'
import './App.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      oWon:0,
      xWon : 0,
      hasWinner : [false, "+"],
      countPerClick : 0,
      posisiKlik:["+","+","+","+","+",
                  "+","+","+","+",],
      warnaKlik : ["btn span1","btn span1","btn span1","btn span1","btn span1",
                  "btn span1","btn span1","btn span1","btn span1"]
    }
  }

  logOut() {
        Fire.auth().signOut();
  }

  cekTieCondition(){
    var tmp = this.state.posisiKlik.filter(posisi => posisi === "+")
    if(tmp.length>0)
      return false
    else
      return true
  }

  cekkWinCondition(indeks, valueposisi){
    var nilaiWinCondition = false
    var tmp = this.state.posisiKlik
    tmp[indeks] = valueposisi
    var winCondition = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    winCondition.map((value)=>{
      if(this.state.posisiKlik[value[0]] === valueposisi && this.state.posisiKlik[value[1]] === valueposisi && this.state.posisiKlik[value[2]] === valueposisi){
        nilaiWinCondition = true
      }
    })
    return nilaiWinCondition;
  }

  cekAlreadyClick(indeks){
    if(this.state.posisiKlik[indeks] === "X" || this.state.posisiKlik[indeks] === "O")
      return true
    else
      return false
  }

  restartGame(){
    this.setState({posisiKlik:["+","+","+","+","+",
                "+","+","+","+"]})
    this.setState({warnaKlik:["btn span1","btn span1","btn span1","btn span1","btn span1",
                "btn span1","btn span1","btn span1","btn span1"]})
    this.setState({hasWinner:[false, "+"]})
  }

  klikGame(indeks){
    console.log("statenya ",this.state.posisiKlik);
    var tmpWarna = this.state.warnaKlik
    if(this.state.hasWinner[0] === true){
      this.restartGame()
      alert(`${this.state.hasWinner[1]} Win, Start a new game`)
    } else if(this.cekTieCondition() === true){
      this.restartGame()
      alert("It's Tie")
    } else if(this.cekAlreadyClick(indeks) === true){
      alert("Already Selected")
    } else {
      if(this.state.countPerClick%2 == 0){
        // Giliran O
        var tmpPosisiKlik = this.state.posisiKlik.map((posisi, i) => {
            if(i == indeks){
              return "O"
            } return posisi
          }
        )
        tmpWarna[indeks] = "btn span1 disable o btn-primary"
        if(this.cekkWinCondition(indeks, "O") === true){
          this.setState({hasWinner:[true, "O"]})
          this.setState({oWon:this.state.oWon+1})
          alert("O Win")
        }
      } else {
        // Giliran X
        var tmpPosisiKlik = this.state.posisiKlik.map((posisi, i) => {
            if(i == indeks){
              return "X"
            } return posisi
          }
        )
        tmpWarna[indeks] = "btn span1 disable x btn-info"
        if(this.cekkWinCondition(indeks, "X") === true){
          this.setState({hasWinner:[true, "X"]})
          this.setState({xWon:this.state.xWon+1})
          alert("X Win")
        }
      }
      this.setState({warnaKlik:tmpWarna})
      this.setState({posisiKlik:tmpPosisiKlik})
      this.setState({countPerClick:this.state.countPerClick+1})
    }
  }

  render() {
    return (
        <div id="tic-tac-toe">
          <div className="span3 new_span">
            <div className="row">
              <h1 className="span3">Tic Tac Toe</h1>
              <div className="span3">
                <div className="input-prepend input-append">
                <span className="add-on win_text">O won</span><strong id="o_win" className="win_times add-on">{this.state.oWon}</strong><span className="add-on">time(s)</span>
                </div>

                <div className="input-prepend input-append">
                <span className="add-on win_text">X won</span><strong id="x_win" className="win_times add-on">{this.state.xWon}</strong><span className="add-on">time(s)</span>
                </div>
              </div>
            </div>

            <ul className="row" id="game">
              {
                this.state.posisiKlik.map((posisi, i)=>
                  <li className={this.state.warnaKlik[i]} onClick={() => this.klikGame(i)}>{this.state.posisiKlik[i]}</li>
                )
              }
            </ul>
            <div className="clr">&nbsp;</div>
            <div className="row"><a href="#" id="reset" className="btn-success btn span3" onClick={() => this.restartGame()}>Restart</a></div> <br/>
            <div className="row"><button className="btn-danger btn span3" onClick={this.logOut}>Log Out</button></div>
          </div>
        </div>
    );
  }
}

export default Game;
