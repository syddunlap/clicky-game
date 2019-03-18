import React, { Component } from "react";
import OptionCard from "./components/OptionCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import options from "./options.json";

class App extends Component {
  // Setting this.state.s to the options json array
  state = {
    options
  };

  removeOption = id => {
    // Filter this.state.options for options with an id not equal to the id being removed
    const options = this.state.options.filter(option => option.id !== id);
    // Set this.state.options equal to the new friends array
    this.setState({ options });
  };

  // Map over this.state.options and render an OptionCard component for each option object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        {this.state.options.map(option => (
          <OptionCard
            removeOption={this.removeOption}
            id={option.id}
            key={option.id}
            name={option.name}
            image={option.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

