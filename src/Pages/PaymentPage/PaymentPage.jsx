import { Heading } from "@chakra-ui/layout";
import { Input } from "@material-ui/core";
import React, { useState } from "react";
import PayByRazorPay from "./RazorpayBtn";
import styled from "styled-components";
import { Checkbox } from "@chakra-ui/react";

const PaymentMainDiv = styled.div`
  background: linear-gradient(90deg,#a33555,#5f2747);
  height: 100vh;
`

const PaymentContent = styled.div`
  background: white;
  height: 60vh;
  display: flex;
  margin: 100px 230px;
  border-radius: 10px;
  justify-content: space-around;
  padding: 15px;

  > div {
    flex: 1;
    padding: 10px;
    margin: 10px;
  }

  @media all and ( max-width: 500px ) {
    margin: 20px;
    height: 45vh;

    > div {
      padding: 0;
      margin: 0;
    }

    > div:nth-child(2) {
      display: none;
    }
  }

`

const Form = styled.form`
  display: flex;
  padding: 15px 50px;
  margin-top: 10%;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;

  > div {
    margin: 7px 0;
  }

  > div > div:nth-child(1) label {
    font-size: 14px;
    color: #525252;
  }


  input {
    color: #212121;
    font-weight: 500;
    letter-spacing: 0.4px;
    padding: 2px 0;

    ::placeholder {
      color: #000;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0px;
    }
  }
  
`

const PaymentMilaapLogo = styled.div`
  border-left: 1px solid #c4c4c4;

  > div:nth-child(1) {
    width: 130px;
    height: 120px;
    margin: 22% 0 0 35% ;
    border-radius: 50%;
    padding: 20px;
    background: #9c3353;
  }
  > div:nth-child(1) > div {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  > div:nth-child(2) {
    h1 {
      font-size: 17px;
      color: #212121;
    }
    h3 {
      font-size: 13px;
      line-height: 90%;
      margin-left: 1%;
      color: #525252;
    }
  }
`

const initState = {
  name: "",
  amount: null,
  emailid: "",
  anonymus: true
}

const PaymentPage = () => {
  const [formDetails, setFormDetails] = useState(initState)

  const handleChange = e => {
    const { name, value, checked, type } = e.target
    const val = type === "checkbox" ? checked : value;
    setFormDetails({ ...formDetails, [name]: val })
  }

  return (
    <PaymentMainDiv>
      <Heading color="#fff" paddingTop="50px" lineHeight="0">LET'S SAVE A LIFE TOGETHER!</Heading>
      <PaymentContent>
        <div>
          <Form>
            <div>
              <div>
                <label>Amount</label>
              </div>
              <div>
                <Input
                  name="amount"
                  type="number"
                  placeholder="Amount that you wish"
                  value={formDetails.amount}
                  onChange={handleChange}
                  style={{width: "100%"}}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Name</label>
              </div>
              <div>
                <Input 
                  name="name"
                  type="text"
                  placeholder="Let the world know who you are"
                  value={formDetails.name}
                  onChange={handleChange}
                  style={{width: "100%"}}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Email</label>
              </div>
              <div>
                <Input 
                  name="emailid"
                  type="email"
                  placeholder="Let me have your email"
                  value={formDetails.emailid}
                  onChange={handleChange}
                  style={{width: "100%"}}
                />
              </div>
            </div>
            <div>
              <Checkbox size="md" colorScheme="green" defaultIsChecked checked={formDetails.anonymus} type="checkbox" name="anonymus" onChange={handleChange}>
                Keep me <strong>Anonymous</strong>
              </Checkbox>
            </div>
          </Form>
          <div>
              <PayByRazorPay amount={formDetails.amount} disableData={formDetails.anonymus ? { ...formDetails, name: "Anonymus" } : formDetails} />
          </div> 
        </div>   
        <PaymentMilaapLogo>
          <div>
            <div style={{backgroundImage: `url(${"https://assets.milaap.org/assets/milaap-trasparent-logo-25f6253e0156e2f82e2c3daf85575d169864e35ffffd21033ac59da0b4dd88e0.png"})`}}></div>
          </div>
          <div>
            <h1>  
              Welcome to Milaap Payment
            </h1>
            <h3>
              Let's show world, Humanity is still alive.
            </h3>
          </div>
        </PaymentMilaapLogo>  
      </PaymentContent>
    </PaymentMainDiv>
  );
};

export default PaymentPage;
