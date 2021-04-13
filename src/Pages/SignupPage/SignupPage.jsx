import { Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import InputField from "../../Styled-components/InputField";
import styled from "styled-components";
import StyledButton from "../../Styled-components/Button";
import { useDispatch } from "react-redux";
import { signup } from "../../Redux/auth/actions";

const FormContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SignupPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(signup({ email, password }));
  };

  return (
    <div>
      <Heading>Sign Up Page</Heading>
      <FormContainer>
        <InputField
          value={fullname}
          label="Full name"
          onChange={(e) => setFullname(e.target.value)}
        />
        <InputField
          value={email}
          label="Email"
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
          text="Sign up"
        />
      </FormContainer>
    </div>
  );
};

export default SignupPage;
