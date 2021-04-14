import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import styled from "styled-components";

const CardDetailsMainDiv = styled.div`
  width: 30%;
  margin: 10px 1.5%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #9c3353;
  padding-bottom: 5px;

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

// const DescriptionDiv = styled.div`
//   padding: 15px 0 15px 14px;
//   display: flex;

//   > div:nth-child(1) {
//     border: 1.5px solid #691a47;
//     border-top-left-radius: 10px;
//     border-bottom-left-radius: 10px;
//     background: #691a47;
//   }
//   > div:nth-child(2) {
//     background: #f7f7f7;
//     text-align: left;
//     margin: 0 5% 0 0;
//     font-size: 14px;
//     line-height: 18px;
//     padding: 5px 8px;
//   }
// `;

export const DonationCardDetails = ({
  label,
  imageUrl,
  amount,
  creater,

  percentage,
}) => {
  console.log(imageUrl);
  return (
    <CardDetailsMainDiv>
      <div>
        <div style={{ backgroundImage: `url(${imageUrl})` }}></div>
      </div>
      <TitleDiv>
        <h1>{label}</h1>
      </TitleDiv>
      <div>
        <CircularProgress value={percentage} color="green.400">
          <CircularProgressLabel>{percentage}%</CircularProgressLabel>
        </CircularProgress>
        <div>
          <div>Raised</div>
          <div>&#8377;{amount}</div>
        </div>
        <div></div>
        <div>
          <div>Created by</div>
          <div>{creater}</div>
        </div>
      </div>
    </CardDetailsMainDiv>
  );
};
