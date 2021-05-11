import React from "react"
import styled from "styled-components"



const SearchBtn=styled.div`
   background:white;
   color:brown;
   border:1px solid brown;
   border-radius:25px;
   padding:8px;
   width:200px;
   margin:20px 0px;
   position:relative;
   left:69%;

   &:hover{
       box-shadow:0px 0px 5px brown;
   }

`

export const RefineSearchBtn=({text,onClick})=>{
    return(
       <SearchBtn onClick={onClick}>
           {text}
       </SearchBtn>
    )
}