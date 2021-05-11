import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Switch } from "@chakra-ui/react";
import { CurrencyContext } from "../Context/CurrencyContextProvider/CurrencyContextProvider";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../Redux/auth/actions";

const CustomSwitch = styled(Switch)`
  .css-1b2twv6[aria-checked="true"],
  .css-1b2twv6[data-checked] {
    background-color: #912c4a;
  }
`;

export function Navbar() {
  const Link = styled(NavLink)`
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
    &:active {
      background: #e2e1e1;
    }
  `;
  const [show, setShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { currencyToggle, handleCurrencyToggel } = useContext(CurrencyContext);
  const { isAuth, activeUser } = useSelector((state) => state.auth);
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
        to="/"
      >
        <img
          width="100px"
          height="60px"
          src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"
          alt=""
        />
      </Link>
      <Link
        to="/"
        exact
        activeStyle={{ backgroundColor: "#912c4a", color: "#fff" }}
      >
        Home
      </Link>
      <Link
        activeStyle={{ backgroundColor: "#912c4a", color: "#fff" }}
        to="/donate"
      >
        Donate
      </Link>
      <Link to="/">Lend</Link>
      <Link
        activeStyle={{ backgroundColor: "#912c4a", color: "#fff" }}
        to="/pricing"
      >
        Pricing
      </Link>
      <Link to="/">Contact us</Link>

      <Link
        as="div"
        style={{
          display: "grid",

          gridTemplateColumns: "70px 50px",
        }}
      >
        <CustomSwitch
          size="lg"
          isChecked={currencyToggle}
          onChange={handleCurrencyToggel}
        />

        {currencyToggle ? "Rupee" : "Dollar"}
      </Link>

      <Link
        onClick={() => setShow(!show)}
        style={{
          cursor: "pointer",
          marginTop: "-5px",
        }}
        as="div"
      >
        {isAuth ? (
          <p>{activeUser.fullname}</p>
        ) : (
          <img
            src="https://assets.milaap.org/assets/header/user-icon-dfb080c6054d6a209639e60bd2bc033a2b79a8528da7131a2f118b92dd5589ae.png"
            alt=""
          />
        )}
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
          {!isAuth && (
            <>
              <button
                onClick={() => history.push("/users/sign-in")}
                style={{
                  borderRight: "1px solid gray",
                  padding: "10px",
                  outline: "none",
                }}
              >
                Login
              </button>
              <button
                onClick={() => history.push("/users/sign-up")}
                style={{ padding: "10px", outline: "none" }}
              >
                Register
              </button>
            </>
          )}
          {isAuth && (
            <>
              <button
                onClick={() => history.push("/dashboard")}
                style={{
                  borderRight: "1px solid gray",
                  padding: "10px",
                  outline: "none",
                }}
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  dispatch(signout());
                  history.replace("/");
                }}
                style={{ padding: "10px", outline: "none" }}
              >
                Signout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
