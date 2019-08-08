//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import daVinci from "./daVinci.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    daVinci,
    clickedImage: [],
    score: 0
  };

//when you click on a card ... the Image is taken out of the array
  imageClick = event => {
    const currentImage = event.target.alt;
    const ImageAlreadyClicked =
      this.state.clickedImage.indexOf(currentImage) > -1;

//if you click on an Image that has already been selected, the game is reset and cards reordered
    if (ImageAlreadyClicked) {
      this.setState({
        daVinci: this.state.daVinci.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available Image, your score is increased and cards reordered
    } else {
      this.setState(
        {
          daVinci: this.state.daVinci.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedImage: this.state.clickedImage.concat(
            currentImage
          ),
          score: this.state.score + 1
        },
//if you get all 12 images corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Congradulations, You did it!");
            this.setState({
              daVinci: this.state.daVinci.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedImage: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, Card, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <div className="wrapper">
          {this.state.daVinci.map(daVinci => (
            <Card
              imageClick={this.imageClick}
              id={daVinci.id}
              key={daVinci.id}
              image={daVinci.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;