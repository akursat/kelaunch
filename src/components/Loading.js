import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const StyledLoading = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  color: #ff00ff99;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
`;
const Loading = () => {
  return (
    <StyledLoading>
      <FontAwesomeIcon icon={faSpinner} size="8x" spin pulse />;
    </StyledLoading>
  );
};

export default Loading;
