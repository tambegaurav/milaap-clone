import React from "react"
import styled from "styled-components"

const MainDiv=styled.div`
position:relative;
box-shadow:0px 0px 7px #9c3353;
width:50%;
border-radius:5px;
margin:auto;
padding:3% 5%;
margin-top:20px;
margin-bottom:20px;
`
const LeftDiv=styled.div`
    position:absolute;
    width:130px;
    height:130px;
    left:-70px;
    top:15%;
    padding-left:2%;
    box-shadow:0px 0px 5px #9c3353;
    background:white;
    text-align:center;
    font-weight:500;
`


export function CarouselCard({img,name,review}){
    return(
       <MainDiv>
       <LeftDiv>
           <img width="100px" src={img} alt=""/>
           {name}</LeftDiv>
       {review}
       </MainDiv>
    )
}