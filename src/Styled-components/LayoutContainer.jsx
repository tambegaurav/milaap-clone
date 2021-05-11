import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const LayoutContainer = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};

export default LayoutContainer;
