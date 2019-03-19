import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  state = {
    score: 0,
    message: "Click an image to begin!",
    topScore: 0,
    clicked: [],
    images: [
      "./assets/images/rick.jpg",
      "./assets/images/morty.jpg",
      "./assets/images/beth.jpg",
      "./assets/images/jerry.jpg",
      "./assets/images/summer.jpg",
      "./assets/images/evil-morty.JPG",
      "./assets/images/mr-meeseks.jpg",
      "./assets/images/Scaryterryrm.png",
      "./assets/images/squanchy.jpg",
      "./assets/images/mr-poopy-butthole.jpeg",
      "./assets/images/noob-noob.jpg",
      "./assets/images/ants-in-my-eyes-johnson.jpg",
    ]
  }

  startGame = (key) => {
    if(this.state.clicked.includes(key)) {
      this.setState({
        score: 0,
        clicked: [],
        message: "ALREADY CLICKED THAT ONE!",
        images: this.state.images.sort(() => 0.5 - Math.random())
      });
      document.getElementById("message").classList.add("text-danger");
      [...document.getElementsByClassName("card")].map((element) => element.classList.add("shake"));
      setTimeout(() => {
        document.getElementById("message").classList.remove("text-danger");
        [...document.getElementsByClassName("card")].map((element) => element.classList.remove("shake"));
      }, 500);
    }
    else {
      this.setState({
        score: this.state.score + 1,
        clicked: [...this.state.clicked, key],
        message: "You guessed correctly!",
        topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore,
        images: this.state.images.sort(() => 0.5 - Math.random())
      });
      document.getElementById("message").classList.add("text-success");
      setTimeout(() => {
        document.getElementById("message").classList.remove("text-success");
      }, 500);
    }
  }
  
  render() {
    return (
      <div>
        <NavBar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}>
        </NavBar>
        <BrowserRouter basename="/clicky-game/" />
        <Wrapper>
        <div className="container d-flex flex-row flex-wrap mx-auto justify-content-center my-5">
          {this.state.images.map((url, i) => (
            <Card 
              key={i} 
              url={url} 
              onClick={() => this.startGame(url)} 
            />
          ))}
        </div>
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
