import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

export const neonKeyframe = keyframes`
from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
  }`;
const Counter = styled.h1`
  margin-top: auto;
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  color: #ecf0f1;
  font-family: "Julius Sans One", sans-serif;
  -webkit-animation: ${neonKeyframe} 1.5s ease-in-out infinite alternate;
  -moz-animation: ${neonKeyframe} 1.5s ease-in-out infinite alternate;
  animation: ${neonKeyframe} 1.5s ease-in-out infinite alternate;
`;

const Countdown = ({ date }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <Counter>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </Counter>
  );
};

export default Countdown;
