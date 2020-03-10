/* eslint-disable react/jsx-no-undef */
import React from "react";

import { Switch, Route } from "react-router-dom";

import LandingPage from "./Landingpage";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route to path="/contact" component={Contact} />
    <Route to path="/projects" component={Projects} />
    <Route to path="/resume" component={Resume} />
    
  </Switch>

);

export default Main;
