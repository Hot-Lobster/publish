import React from "react";
import { Navbar, NavItem } from "react-materialize";

export default class Nav extends React.Component {
  render() {
    return (
      <Navbar
        brand="Adam Olson"
        href={process.env.PUBLIC_URL + "/"}
        className=""
        right
      >
        <NavItem href={process.env.PUBLIC_URL + "/projects"}>Projects</NavItem>
        <NavItem href={process.env.PUBLIC_URL + "/fish"}>Fish</NavItem>
        <NavItem href={process.env.PUBLIC_URL + "/"}>Home</NavItem>
      </Navbar>
    );
  }
}
