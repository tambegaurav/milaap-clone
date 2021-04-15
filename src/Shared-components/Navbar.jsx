import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Switch } from "@chakra-ui/react";
import { CurrencyContext } from "../Context/CurrencyContextProvider/CurrencyContextProvider";

export function Navbar() {
  const Link = styled.a`
    color: black;
    padding-top: 20px;
    margin-left: 10px;
    padding-right: 10px;
    padding-left: 10px;
    font-weight: 500;
    font-size: 17px;

    &:hover {
      background-color: #f0efef;
    }
  `;
  const [show, setShow] = useState(false);

  const { currencyToggle, handleCurrencyToggel } = useContext( CurrencyContext )
  return (
    <div
      style={{
        width: "100%",
        height: "9vh",
        boxShadow: "1px 1px 5px #fcb2c8",
        display: "flex",
        position: "sticky",
        top: 0,
        zIndex: "100",
        backgroundColor: "#fff",
        justifyContent: "space-around",
      }}
    >
      <Link
        style={{
          paddingTop: "15px",
        }}
      >
        <img
          width="100px"
          height="60px"
          src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"
          alt=""
        />
      </Link>
      <Link href="#">Home</Link>
      <Link href="">Donate</Link>
      <Link href="">Lend</Link>
      <Link href="">Pricing</Link>
      <Link href="">Contact us</Link>
      <Link>
        <Switch size="lg" isChecked={currencyToggle} onChange={handleCurrencyToggel} />
      </Link>

      <Link
        onClick={() => setShow(!show)}
        style={{
          paddingTop: "15px",
        }}
      >
        <img
          src="https://assets.milaap.org/assets/header/user-icon-dfb080c6054d6a209639e60bd2bc033a2b79a8528da7131a2f118b92dd5589ae.png"
          alt=""
        />
      </Link>

      {show && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "20px",
            border: "1px solid #a2a2ff",
            background: "white",
            display: "flex",
            padding: "5px",
            borderRadius: "5px",
            boxShadow: "2px 2px #d0d1f0",
            transition: "1px",
          }}
        >
          <button style={{ borderRight: "1px solid gray", padding: "10px" }}>
            Login
          </button>
          <button style={{ padding: "10px" }}>Register</button>
        </div>
      )}
    </div>
  );
}
