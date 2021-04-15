import React from "react";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";

const StyledBtn = styled(Button)`
  /* width: 400px !important; */
  margin-top: 10px;
  background-color: #9c3353;
  color: white;
  border-radius: 20px;
  outline: none;
  border: none;
  &:hover {
    background-color: #9c3353;
    color: white;
    box-shadow: 1px 1px 5px #6b6b6b;
  }
`;

const StyledButton = ({ text, onClick, isLoading, style }) => {
  return (
    <div>
      <StyledBtn isLoading={isLoading} onClick={onClick} style={style}>
        {text}
      </StyledBtn>
    </div>
  );
};

export default StyledButton;
