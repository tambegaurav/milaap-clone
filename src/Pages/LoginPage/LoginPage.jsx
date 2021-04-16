import React, { useState } from "react";
import InputField from "../../Styled-components/InputField";
import styled from "styled-components";
import StyledButton from "../../Styled-components/Button";
import LayoutContainer from "../../Styled-components/LayoutContainer";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../Redux/auth/actions";
import { Heading } from "@chakra-ui/layout";
import { Redirect, useHistory } from "react-router-dom";

const Container = styled.div`
  width: 70%;
  background-color: white;
  padding: 20px;
  height: 70vh;
  display: grid;
  grid-template-columns: 25% 75%;
  border-radius: 10px;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 100%;
`;

const LeftDiv = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid #b4b4b4;
`;

const LogoBox = styled.div`
  height: 100px;
  width: 100px;
  background-color: #9c3353;
  border-radius: 50px;
  display: grid;
  place-items: center;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuth } = useSelector((state) => state.auth);

  const handleRegister = () => {
    dispatch(signin({ email, password }));
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <LayoutContainer
      style={{
        background: "linear-gradient(90deg,#a33555,#5f2747)",
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <LeftDiv>
          <LogoBox>
            <img
              alt="Milaap logo"
              width="60"
              src="https://assets.milaap.org/assets/milaap-trasparent-logo-25f6253e0156e2f82e2c3daf85575d169864e35ffffd21033ac59da0b4dd88e0.png"
            />
          </LogoBox>
          <p>Welcome to Milaap,</p>
          <p>India’s largest crowdfunding site</p>
        </LeftDiv>
        <FormContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
              marginTop: "50px",
            }}
          >
            <Heading>Login</Heading>

            <InputField
              value={email}
              label="Mobile / Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              value={password}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <StyledButton
              onClick={handleRegister}
              isLoading={false}
              text="Login"
              style={{ width: "400px", backgroundColor: "#9c3353" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {" "}
            <p>New to Milaap? Sign up now, it’s quick & free </p>{" "}
            <StyledButton
              text="Sign up"
              style={{ width: "100px", backgroundColor: "#9c3353" }}
              onClick={() => history.replace("/users/sign-up")}
            />
          </div>
        </FormContainer>
      </Container>
    </LayoutContainer>
  );
};

export default LoginPage;
