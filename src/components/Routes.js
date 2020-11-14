import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Opportunities from "../containers/Opportunities";
import SavedOpportunities from "../containers/SavedOpportunities";
import NotFound from "../containers/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Opportunities} />
        <Route path="/savedopportunities" component={SavedOpportunities} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

