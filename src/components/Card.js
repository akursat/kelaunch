import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import img from "../assets/background.jpg";

const Cardy = styled.div`
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: rgba(1, 5, 14, 0.425);
  background-clip: border-box;
  border: 2px solid #fffaf0
  border-radius: 0.25rem;
  width: 20rem;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
  color: #ecf0f1;
  font-family: "Julius Sans One", sans-serif;
`;
const Poster = styled.img`
  background: ${props => (props.src ? props.src : url(img))};
  width: 250px;
  height: 400px;
  padding: 12px;
  border: 1px solid #fffaf0;
  background-color: #fffaf0;
`;
const Question = styled.span`
  margin: 5px;
  font-size: 1rem;
  font-weight: 400;
  color: #ff00ff;
  font-family: "Dosis", sans-serif;
`;
const Answer = styled(Question)`
  color: #bdc3c7;
`;
const Description = styled.p`
  margin: 5px;
  text-align: justify;
  font-size: 1rem;
  font-weight: 400;
  color: #ecf0f1;
`;
export const neonKeyframe = keyframes`
from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
  }`;
const Counter = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  color: #ecf0f1;
  font-family: "Julius Sans One", sans-serif;
  -webkit-animation: ${neonKeyframe} 1.5s ease-in-out infinite alternate;
  -moz-animation: ${neonKeyframe} 1.5s ease-in-out infinite alternate;
  animation: ${neonKeyframe} 1.5s ease-in-out infinite alternate;
`;

const Card = props => {
  return (
    <Cardy>
      <Title>Falcon IV</Title>
      <Poster src="https://s3.amazonaws.com/launchlibrary/RocketImages/Ariane+5+ECA_1920.jpg" />
      <Answer>
        <Question>Where:</Question>Ariane Launch Area 3, Kourou
      </Answer>
      <Answer>
        <Question>When:</Question>January 16, 2020 21:05:00 UTC
      </Answer>
      <Description>
        Shijian 20 is an experimental geostationary communications satellite.
        This is also a return-to-flight launch for Long March 5 after a July
        2017 failure.
      </Description>
      <Counter>20d 12h 42m 45s</Counter>
    </Cardy>
  );
};

export default Card;
