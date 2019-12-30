import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NButton = styled.a`
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

const Next = props => {
  return (
    <NButton onClick={props.onClick}>
      <FontAwesomeIcon icon={faChevronRight} size="4x" />
    </NButton>
  );
};

export default Next;
