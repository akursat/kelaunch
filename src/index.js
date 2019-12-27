import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import img from "./assets/background.jpg";
import Card from "/components/Card";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${img});
    background-size: cover;
    font-family: 'Arimo', sans-serif;
  }
`;

const App = props => {
  return (
    <div>
      <GlobalStyle />
      <Card />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));

export default App;
