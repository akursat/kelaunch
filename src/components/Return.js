import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";

const RButton = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  color: white;
  &:hover {
    color: #ff00ff99;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;
const Return = props => {
  return (
    <RButton onClick={props.onClick}>
      <FontAwesomeIcon icon={faHistory} size="4x" />
    </RButton>
  );
};

export default Return;
