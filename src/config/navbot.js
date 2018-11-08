import React from "react";
import { Footer } from "react-materialize";

export default class Foot extends React.Component {
  render() {
    return (
      <Footer
        id="pagefooter"
        copyrights="&copy 2015 Copyright Text"
        moreLinks={
          <a
            className="grey-text text-darken-3 right"
            href="https://github.com/olsoa4"
          >
            My Github
          </a>
        }
        links={
          <ul>
            <li>
              <a className="grey-text text-darken-2" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="grey-text text-darken-2" href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a className="grey-text text-darken-2" href="/fish">
                Fish
              </a>
            </li>
          </ul>
        }
      />
    );
  }
}
