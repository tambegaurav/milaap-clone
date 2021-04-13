import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
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
      </Switch>
    </div>
  );
};

export default Routes;
