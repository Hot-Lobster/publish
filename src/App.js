import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./config/home.js";
import Projects from "./config/projects.js";
import Nav from "./config/navtop.js";
import Fish from "./config/fish.js";
import Foot from "./config/navbot.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <div>
            <Switch>
              <Route
                path={process.env.PUBLIC_URL + "/"}
                component={Home}
                exact
              />
              <Route
                path={process.env.PUBLIC_URL + "/projects"}
                component={Projects}
              />
              <Route path={process.env.PUBLIC_URL + "/fish"} component={Fish} />
            </Switch>
          </div>
          <Foot />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
