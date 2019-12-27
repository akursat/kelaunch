import React from "react";
import { render } from "react-dom";
import useAxios from "axios-hooks";
import styled, { createGlobalStyle } from "styled-components";
import img from "./assets/background.jpg";
import Card from "/components/Card";
import Next from "/components/Next";
import Return from "/components/Return";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${img});
    background-size: cover;
    font-family: 'Arimo', sans-serif;
    margin: 0;
    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const App = props => {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://launchlibrary.net/1.4/launch/next/3"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, Check the API!</p>;

  return (
    <Content>
      <GlobalStyle />
      <Return />
      <Row>
        {data["launches"].map(rocket => (
          <Card
            key={rocket.id}
            where={rocket["location"]["name"]}
            when={rocket["windowstart"]}
            poster={rocket["rocket"]["imageURL"]}
            description={rocket["missions"][0]["description"]}
            title={rocket["missions"][0]["name"]}
          />
        ))}
      </Row>
      <Next />
    </Content>
  );
};

render(React.createElement(App), document.getElementById("root"));

export default App;
