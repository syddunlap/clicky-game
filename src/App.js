import React, { Component } from "react";
import OptionCard from "./components/OptionCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import options from "./options.json";

function App() {
  return (
    <Wrapper>
      <Title>Clicky Game!</Title>
      <OptionCard
        id={options[0].id}
        key={options[0].id}
        image={options[0].image}
      />
      <OptionCard
        id={options[1].id}
        key={options[1].id}
        image={options[1].image}
      />
      <OptionCard
        id={options[2].id}
        key={options[2].id}
        image={options[2].image}
      />
      <OptionCard
        id={options[3].id}
        key={options[3].id}
        image={options[3].image}
      />
    </Wrapper>
  )
}

export default App;