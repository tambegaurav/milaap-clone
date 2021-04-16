import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

const ScrollBtn = styled.div`
  position: fixed;
  right: 20px;
  top: 700px;
  z-index: 100;
`;

const ScrollIcon = styled.div`
  width: 2em;
  height: 2em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const ScrollToTopButton = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <ScrollBtn>
      {show && 
        <IconButton onClick={handleClick}>
          <ScrollIcon style={{backgroundImage: `url(${"https://static.thenounproject.com/png/138547-200.png"})`}}></ScrollIcon>  
        </IconButton>}
    </ScrollBtn>
  );
};

export default ScrollToTopButton;
