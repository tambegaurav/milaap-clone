import React from "react";
import { Switch, Route } from "react-router-dom";
import { CreateFundraiser } from "./Pages/CreateFundraiser/CreateFundraiser";
import { DashBoard } from "./Pages/DashBoard/DashBoard";
import { Donate } from "./Pages/DonatePage/Donate";
import { FundraiserDonate } from "./Pages/DonatePage/FundraiserDonate";
import { EditFundraiser } from "./Pages/EditFundraiser/EditFundraiser";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import PaymentPage from "./Pages/PaymentPage";
import SignupPage from "./Pages/SignupPage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/users/sign-up"}>
          <SignupPage />
        </Route>
        <Route exact path={"/users/sign-in"}>
          <LoginPage />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/fundraisers/:id">
          <FundraiserDonate />
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/createfundraiser">
          <CreateFundraiser />
        </Route>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/editfundraiser/:id">
          <EditFundraiser/>
        </Route>
        <Route>
          <h1>Page not found!!</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
