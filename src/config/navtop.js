import React from "react";
import { Navbar, NavItem } from "react-materialize";

export default class Nav extends React.Component {
  render() {
    return (
      <Navbar brand="Adam Olson" right>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/fish">Fish</NavItem>
        <NavItem href="/">Home</NavItem>
      </Navbar>
    );
  }
}
