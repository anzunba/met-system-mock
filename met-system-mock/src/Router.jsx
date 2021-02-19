import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SignIn, TwoAuth, Dashboard} from "./templates";

const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path={"/dashboard"} component={Dashboard} />
            <Route exact path={"/twoauth"} component={TwoAuth} />
            <Route exact path={"(/)?"}  component={SignIn} />
        </Switch>
        </BrowserRouter>
    )
};

export default Router;