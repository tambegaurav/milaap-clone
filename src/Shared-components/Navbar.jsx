import React, { useState } from "react"
import styled from "styled-components"
import { Switch } from "@chakra-ui/react"

export function Navbar(){
    const Link=styled.a`
     color: black;
     padding-top:20px;
     margin-left:10px;
     padding-right:10px;
     padding-left:10px;
     font-weight:500;
     font-size:17px;

     &:hover{
         background-color:#f0efef;
     };      
    `
    const [show,setShow]=useState(false)

    return(
        <div style={{
            width:"100%",
            height:"11vh",
            boxShadow:"1px 1px rgb(248, 246, 246)",
            display:"flex"
        }}>
            <Link style={{
                paddingTop:"15px"
            }}><img  width="100px" height="60px" src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png" alt=""/></Link>
         <Link href="#">Home</Link>
         <Link href="">Donate</Link>
         <Link href="">Lend</Link>
         <Link href="">Pricing</Link>
         <Link href="">Contact us</Link>
        <Link ><Switch size="lg" /></Link>
        
        {/* <div style={{backgroundColor:"#9c3353",
        borderRadius:"20px",
        width:"80px",
        height:"25px",
        position:"relative"
        }}>
            <div style={{position:"absolute",
            width:"35px",
            height:"35px",
            backgroundColor:"lightgray",
            borderRadius:"20px",top:"-5px",
            boxShadow:"-moz-initial"
            }}></div>
            <div style={{
                position:"absolute",
                left:"40px"
                
            }}>INR</div>
        </div> */}
        
       

         <Link onClick={()=>setShow(!show)} style={{
             paddingTop:"15px"
         }}><img  src="https://assets.milaap.org/assets/header/user-icon-dfb080c6054d6a209639e60bd2bc033a2b79a8528da7131a2f118b92dd5589ae.png" alt=""/></Link>


      {
          show  && <div style={{
            position:"absolute",
            top:"60px",
            left:"600px",
            border:"1px solid #7878c5",
            background:"white",
            display:"flex",
            padding:"5px",
            borderRadius:"5px",
            boxShadow:"2px 2px #d0d1f0",
            transition:"1px"

        }}>
            <button style={{borderRight:"1px solid gray",padding:"10px"}}>Login</button>
            <button style={{padding:"10px"}}>Register</button>
        </div>
      }
            
        </div>
    )
}