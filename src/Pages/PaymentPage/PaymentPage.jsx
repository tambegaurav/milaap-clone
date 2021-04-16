import { Heading } from "@chakra-ui/layout";
import { Input } from "@material-ui/core";
import React, { useState } from "react";
import PayByRazorPay from "./RazorpayBtn";

const PaymentPage = () => {
  const [amount, setAmount] = useState(null);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Heading>Donate for a good cause!</Heading>
      <Input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ paddingLeft: "20px", fontSize: "25px" }}
      />

      <PayByRazorPay amount={amount} />
    </div>
  );
};

export default PaymentPage;
