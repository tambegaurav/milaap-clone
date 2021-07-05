import { Switch } from "@chakra-ui/react";
import { Drawer } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { CurrencyContext } from "../Context/CurrencyContextProvider/CurrencyContextProvider";
import { setData } from "../localStorage";
import { ReactComponent as MenuIcon } from "../menu.svg";
import { signout } from "../Redux/auth/actions";
import "../Styles/NavBar.css";

const CustomSwitch = styled(Switch)`
  .css-1b2twv6[aria-checked="true"],
  .css-1b2twv6[data-checked] {
    background-color: #912c4a;
  }
`

const NavBarLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Link = styled(NavLink)`
  color: black;
  font-weight: 500;
  font-size: 17px;

  &:hover {
    background-color: #f0efef;
  }
  &:active {
    background: #e2e1e1;
  }

  @media (max-width: 960px) {
    font-size: 18px;
    width: 300px;
    padding: 10px;
  }
`

export function Navbar() {
  const [show, setShow] = useState(false);
  const [menuDrawer, setMenuDrawer] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const { currencyToggle, handleCurrencyToggel } = useContext(CurrencyContext);
  const { isAuth, activeUser } = useSelector((state) => state.auth);

  return (
    <div className="navbar-main-container">
      <div className="navbar-logo-link" onClick={() => history.push("/")}>
        <NavBarLogo src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png" alt="Logo" />
      </div>
      <div className="navbar-menu-items-container-before">
        <Link to="/" exact activeStyle={{ backgroundColor: "#912c4a", color: "#fff" }} >
          Home
        </Link>
        <Link activeStyle={{ backgroundColor: "#912c4a", color: "#fff" }} to="/donate" >
          Donate
        </Link>
        <Link to="/">Lend</Link>
        <Link activeStyle={{ backgroundColor: "#912c4a", color: "#fff" }} to="/pricing" >
          Pricing
        </Link>
        <Link to="/">Contact us</Link>
      </div>
      <div className="navbar-menu-icon" onClick={() => setMenuDrawer(true)} >
        <MenuIcon />
      </div>
      <div className="navbar-menu-items-container-after">
        <Drawer anchor="left" open={menuDrawer} onClose={() => setMenuDrawer(false)}>
          <Link to="/" exact activeStyle={{ backgroundColor: "#912c4a", color: "#fff" }} >
            Home
          </Link>
          <Link activeStyle={{ backgroundColor: "#912c4a", color: "#fff" }} to="/donate" >
            Donate
          </Link>
          <Link to="/">Lend</Link>
          <Link activeStyle={{ backgroundColor: "#912c4a", color: "#fff" }} to="/pricing" >
            Pricing
          </Link>
          <Link to="/">Contact us</Link>
        </Drawer>
      </div>
      <div className="custom-toggle-switch" >
        <CustomSwitch
          size="lg"
          text="bingo"
          isChecked={currencyToggle}
          onChange={handleCurrencyToggel}
        />
        {currencyToggle ? <span>INR</span> : "USD"}
      </div>

      <div onClick={() => setShow(!show)} className="navbar-user-container" >
        {isAuth ? (
          <p>{activeUser.fullname}</p>
        ) : (
          <img src="https://assets.milaap.org/assets/header/user-icon-dfb080c6054d6a209639e60bd2bc033a2b79a8528da7131a2f118b92dd5589ae.png" alt="UserLogo" />
        )}
      </div>

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
