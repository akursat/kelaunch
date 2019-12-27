import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import img from "./assets/background.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${img});
    background-size: cover;
  }
`;

const App = props => {
  return (
    <div>
      <GlobalStyle />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));

export default App;
