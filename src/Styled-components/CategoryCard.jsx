import React from "react"
import styled from "styled-components"



const MainDiv=styled.div`
    width:100px;
    height:100px;
    box-shadow:0px 0px 5px brown;
    border-radius:7px;
    font-weight:500;
    cursor: pointer;
    >div:nth-child(1){
    padding-left:15px;
    }
`

export function CategoryCard({img,text,onClick}){
    return(
     <MainDiv onClick={onClick}>
          <div><img width="70px" src={img} alt=""/></div>
          <div>{text}</div>
     </MainDiv>
    )
}