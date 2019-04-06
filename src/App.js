import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/Card";
import cards from "./cards.json";
import Header from "./components/Header/header.js";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if(this.state.score > this.state.highscore){
      this.setState({highscore: this.state.score}, function(){
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i)  => {
      if(o.id === id){
        if(cards[i].count ===  0){
          cards[i].count = cards[i].count +1;
          this.setState({score: this.state.score  +1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
          }else{
            this.gameOver();
          }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Header></Header>
        {this.state.cards.map(friend => (
          <FriendCard 
            clickCount = {this.clickCount}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;