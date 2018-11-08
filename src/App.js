import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./config/home.js";
import Projects from "./config/projects.js";
import Nav from "./config/navtop.js";
import Fish from "./config/fish.js";
import Foot from "./config/navbot.js";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav />
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/projects" component={Projects} />
              <Route path="/fish" component={Fish} />
            </Switch>
          </div>
          <Foot />
        </div>
      </HashRouter>
    );
  }
}

export default App;
