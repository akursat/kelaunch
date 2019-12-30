import React, { useState } from "react";
import { render } from "react-dom";
import useAxios from "axios-hooks";
import styled, { createGlobalStyle } from "styled-components";
import img from "./assets/background.jpg";
import Card from "/components/Card";
import Next from "/components/Next";
import Return from "/components/Return";
import Loading from "/components/Loading";

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

const apiURL = "https://launchlibrary.net/1.4/launch/?next=3";

const App = props => {
  const [offset, setOffset] = useState(0);
  const nextHandler = e => {
    setOffset(offset + 3);
  };

  const returnHandler = e => {
    setOffset(0);
  };

  const [{ data, loading, error }, refetch] = useAxios(
    `${apiURL}&offset=${offset}`
  );

  if (error) return <p>Error, Check the API!</p>;
  return (
    <Content>
      <GlobalStyle />
      <Return onClick={returnHandler} />
      {loading === true && <Loading />}
      {data !== undefined && (
        <Row>
          {data["launches"].map(rocket => {
            const { missions } = rocket;
            const { description } =
              missions[0] !== undefined ? missions[0] : "";
            const { name } = missions[0] !== undefined ? missions[0] : "";
            return (
              <Card
                key={rocket.id}
                where={rocket["location"]["name"]}
                when={rocket["windowstart"]}
                poster={rocket["rocket"]["imageURL"]}
                description={description}
                title={name}
              />
            );
          })}
        </Row>
      )}

      <Next onClick={nextHandler} />
    </Content>
  );
};

render(React.createElement(App), document.getElementById("root"));

export default App;
