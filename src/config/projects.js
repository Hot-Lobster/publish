import React from "react";
import { Col, Row } from "react-materialize";
import Hangman from "./imgs/hangman.png";
import ZombieHunt from "./imgs/zombiehunt.png";
const Projects = () => {
  return (
    <div className="container contain">
      <Row className="">
        <Col s={6} className="">
          <img className="project reponsive-img" src={Hangman} alt="hangman" />
          <a href="https://olsoa4.github.io/hangman.github.io/">Hangman</a>
        </Col>
        <Col s={6} className="">
          <img
            className="project reponsive-img"
            src={ZombieHunt}
            alt="ZombieHunt"
          />
          <a href="https://zombiehunt.herokuapp.com/">Zombie Hunt</a>
          <p>this game is multiplayer and reqiures at least 2 people</p>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
