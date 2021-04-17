import React, { useContext } from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CurrencyContext } from "../../Context/CurrencyContextProvider/CurrencyContextProvider";

const CardDetailsMainDiv = styled.div`
  width: 30%;
  margin: 10px 1.5%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #9c3353;
  padding-bottom: 5px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  :hover {
    box-shadow: 2px 2px 10px #9c3353;
    transform: scale(1.01);
  }

  > div:nth-child(1) > div {
    width: 100%;
    height: 32vh;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: inset 0px 80px 80px rgba(0, 0, 0, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  > div:nth-child(3) {
    display: flex;
    padding: 0 10px;

    > div:nth-child(2) {
      text-align: left;
      background: white;
      padding: 0 18px 0 5px;

      > div:nth-child(1) {
        font-size: 12px;
        color: #626262;
      }
      > div:nth-child(2) {
        font-size: 18px;
        margin-top: 2px;
        color: #212121;
      }
    }

    > div:nth-child(3) {
      border-left: 1.5px solid #c9c9c9;
      height: 24px;
      margin: 8px 5px 0;
    }

    > div:nth-child(4) {
      text-align: left;
      background: white;
      padding: 0 10px 0 5px;

      > div:nth-child(1) {
        font-size: 12px;
        color: #626262;
      }
      > div:nth-child(2) {
        font-size: 13.5px;
        margin-top: 2px;
        color: #212121;
      }
    }
  }
`;

const TitleDiv = styled.div`
  text-align: left;
  padding: 10px;
`;

export const DonationCardDetails = ({
  label,
  imageUrl,
  amount,
  creater,
  id,
  onClick,
  percentage,
}) => {
  const { currencyToggle } = useContext(CurrencyContext);
  let str = "";
  for( let i=0; i<7; i++ ) {
    if( creater[i] === undefined ) {
      break
    } else {
      str += creater[i];
    }
  }

  const history = useHistory();
  // console.log(imageUrl);
  return (
    <CardDetailsMainDiv onClick={onClick}>
      <div>
        <div style={{ backgroundImage: `url(${imageUrl})` }}></div>
      </div>
      <TitleDiv>
        <h1>{label}</h1>
      </TitleDiv>
      <div>
        <CircularProgress value={Math.round(percentage)} color="green.400">
          <CircularProgressLabel>
            {Math.round(percentage)}%
          </CircularProgressLabel>
        </CircularProgress>
        <div>
          <div>Raised</div>
          <div>
            {" "}
            {currencyToggle ? <span>&#8377;</span> : <span>$</span>}{" "}
            {currencyToggle ? amount : Math.round(amount / 74)}
          </div>
        </div>
        <div></div>
        <div>
          <div>Created by</div>
          <div>{str} ...</div>
        </div>
      </div>
    </CardDetailsMainDiv>
  );
};
