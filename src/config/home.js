import React from "react";
import { Card, CardTitle, Col } from "react-materialize";
import Cardback from "./imgs/IMG_2886.jpg";
import Me from "./imgs/IMG_0333.jpg";
import Row from "react-materialize/lib/Row";

const Home = () => {
  return (
    <div>
      <Card className="small" header={<CardTitle image={Cardback} />}>
        My name is Adam Olson and you have landed at my website. I went to
        school at the U of M for full stack web development and I am very
        passionate about coding. I am also a father and an avid aquarist. If you
        have any questions about coding or aquariums I would love to talk to you
        about it!
      </Card>
      <div className="container contain">
        <Row>
          <img className="circle reponsive-img profile" src={Me} alt="me" />
          <Col s={6}>
            <ul className="collapsible expandable">
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">contact_phone</i>
                  Phone
                </div>
                <div className="collapsible-body">
                  <span>952-221-8894</span>
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">contact_mail</i>
                  Email
                </div>
                <div className="collapsible-body">
                  <span>olsoa4@hotmail.com</span>
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">whatshot</i>
                  Github
                </div>
                <div className="collapsible-body">
                  <a href="https://github.com/olsoa4">olsoa4</a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
