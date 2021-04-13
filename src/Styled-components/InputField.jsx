import { TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Input = styled(TextField)`
  width: 400px;
  outline: none;
`;

const InputField = ({ label, onChange, style, type = "text", value }) => {
  return (
    <div>
      <Input
        type={type}
        onChange={onChange}
        label={label}
        value={value}
        style={style}
      />
    </div>
  );
};

export default InputField;
