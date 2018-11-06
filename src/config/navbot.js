import React from "react";
import { Footer } from "react-materialize";

export default class Foot extends React.Component {
  render() {
    return (
      <Footer
        copyrights="&copy 2015 Copyright Text"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        }
        links={
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="/fish">
                Fish
              </a>
            </li>
          </ul>
        }
        className="example fixed bottom"
      />
    );
  }
}
