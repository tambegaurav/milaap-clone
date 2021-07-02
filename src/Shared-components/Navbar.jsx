import React, { useContext, useState } from "react";
import "../App.css";
import styled from "styled-components";
import { Switch } from "@chakra-ui/react";
import { CurrencyContext } from "../Context/CurrencyContextProvider/CurrencyContextProvider";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../Redux/auth/actions";
import { setData } from "../localStorage";

const CustomSwitch = styled(Switch)`
  .css-1b2twv6[aria-checked="true"],
  .css-1b2twv6[data-checked] {
    background-color: #912c4a;
  }
`;

export function Navbar() {
  const Link = styled(NavLink)`
    color: black;
    padding-top: 2%;
    /* margin-left: 2%; */
    padding-right: 2%;
    padding-left: 2%;
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
    <div className="nav">
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

        {currencyToggle ? "INR" : "USD"}
      </Link>

      <Link
        onClick={() => setShow(!show)}
        style={{
          cursor: "pointer",
          marginTop: "-5px",
        }}
        as="div"
      >
        {isAuth && activeUser ? (
          <p>{activeUser.fullname}</p>
        ) : (
          <img
            src="https://assets.milaap.org/assets/header/user-icon-dfb080c6054d6a209639e60bd2bc033a2b79a8528da7131a2f118b92dd5589ae.png"
            alt=""
          />
        )}
      </Link>

      {show && (
        <div className="login-box">
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
          {isAuth && activeUser && (
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
                  setData("user", null);
                  setData("isAuth", false);
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
