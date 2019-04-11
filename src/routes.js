import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/main/index";
import Box from "./pages/box";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/box/:id" component={Box} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
