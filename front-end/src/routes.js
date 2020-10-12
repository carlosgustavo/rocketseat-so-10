import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DevForm from "./components/DevForm";
import DevItem from "./components/DevItem";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={DevForm}></Route>
        <Route path="/register" component={DevItem}></Route>
      </Switch>
    </BrowserRouter>
  );
}
