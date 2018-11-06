import React from "react";
import { Parallax } from "react-materialize";
import Shark from "./imgs/shark.png";
import Tang from "./imgs/tang.jpg";

const Fish = () => {
  return (
    <div>
      <Parallax imageSrc={Shark} />
      <div className="section white">
        <div className="row container">
          <h2 className="header">Reefs, fish and you.</h2>
          <p className="grey-text text-darken-3 lighten-3">
            I am an active keeper of saltwater reefs and personal advocate for
            reef conservation around the globe. If you would like more
            information on how you can help with conservation efforts please
            visit the National Oceanic and Atmospheric Administration
            https://coralreef.noaa.gov/
          </p>
        </div>
      </div>
      <Parallax imageSrc={Tang} />
    </div>
  );
};
export default Fish;
