import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  position: relative;
  box-shadow: 0px 0px 10px #9e9e9e;
  width: 60%;
  border-radius: 5px;
  margin: auto;
  padding: 3% 5%;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 200px;
  padding-left: 100px;
  margin-right: 17%;
`;
const LeftDiv = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  box-shadow: 0px 0px 10px #9e9e9e;
  background: white;
  font-weight: 500;
  display: grid;
  place-items: center;
  margin-top: -15px;
  margin-left: -170px;
  border-radius: 5px;
`;

export function CarouselCard({ img, name, review }) {
  return (
    <MainDiv>
      <LeftDiv>
        <img
          width="100px"
          src={img}
          alt=""
          style={{ border: "1px solid #9c3353", borderRadius: "50px" }}
        />
        {name}
      </LeftDiv>
      {review}
    </MainDiv>
  );
}
