import { Heading } from "@chakra-ui/layout";
import { Input } from "@material-ui/core";
import React, { useState } from "react";
import PayByRazorPay from "./RazorpayBtn";
import styled from "styled-components";

const PaymentMainDiv = styled.div`
  /* background-image: url("https://c0.wallpaperflare.com/preview/287/860/54/team-ethnicity-group-hands.jpg"); */
  background-position: center;
  background-repeat:no-repeat;
  background-size: cover;
`

const Form = styled.form`
  /* width: 800px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: red;
  text-align: left;
  input {

    ::placeholder {
      color: #000;
    }
  }
`

const initState = {
  name: "",
  amount: null,
  emailid: ""
}

const PaymentPage = () => {
  // const [amount, setAmount] = useState(null);
  const [formDetails, setFormDetails] = useState(initState)

  const handleChange = e => {
    const { name, value } = e.target
    setFormDetails({ ...formDetails, [name]: value })
  }

  return (
    <PaymentMainDiv
      style={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Heading color="#fff" >Donate for a good cause!</Heading>
      
      <Form>
        <div>
          <div>
            <label>Amount: </label>
          </div>
          <div>
            <Input
              name="amount"
              type="number"
              placeholder="Enter Amount"
              value={formDetails.amount}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Name: </label>
          </div>
          <div>
            <Input 
              name="name"
              type="text"
              placeholder="Enter Name"
              value={formDetails.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Email: </label>
          </div>
          <div>
            <Input 
              name="emailid"
              type="email"
              placeholder="Enter Email"
              value={formDetails.emailid}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <input type="checkbox"/>
          <span>Keep me Anonymous</span>
        </div>
      </Form>
      <div>
        {
          (formDetails.name === "" || formDetails.emailid === "" || formDetails.amount === "") ? null :
          <PayByRazorPay amount={formDetails.amount} disableData={formDetails} />
        }
      </div>      
    </PaymentMainDiv>
  );
};

export default PaymentPage;
