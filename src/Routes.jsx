import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
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
      </Switch>
    </div>
  );
};

export default Routes;
