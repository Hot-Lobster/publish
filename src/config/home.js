import React from "react";
import { Card, CardTitle } from "react-materialize";
import Cardback from "./imgs/IMG_2886.jpg";

const Home = () => {
  return (
    <div>
      <Card className="small" header={<CardTitle image={Cardback} />}>
        My name is Adam Olson and you have landed at my website. I went to
        school at the U of M for web development and I am very passionate about
        coding. I am also a father and an avid aquarist. If you have any
        questions about coding or aquariums I would love to talk to you about
        it!
      </Card>
      <img src="" alt="" />
    </div>
  );
};

export default Home;
