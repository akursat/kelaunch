import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import img from "../assets/background.jpg";
import Countdown from "./Countdown";

const Cardy = styled.div`
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: rgba(1, 5, 14, 0.425);
  background-clip: border-box;
  border: 2px solid #fffaf0
  border-radius: 0.25rem;
  width: 20rem;
  margin: 20px;
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

const Card = ({ title, poster, where, when, description }) => {
  return (
    <Cardy>
      <Title>{title}</Title>
      <Poster src={poster} />
      <Answer>
        <Question>Where:</Question>
        {where}
      </Answer>
      <Answer>
        <Question>When:</Question>
        {when}
      </Answer>
      <Description>{description}</Description>
      <Countdown date={when} />
    </Cardy>
  );
};

export default Card;
