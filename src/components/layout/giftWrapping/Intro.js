import React from "react";
import Img from "gatsby-image";

const Intro = ({ title, description, pageImage, BGImage }) => {
  return (
    <div className="giftwrapping-intro container">
      <div className="background-image">
        <Img fluid={BGImage} />
      </div>
      <div className="content">
        <div className="description">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="page-image">
          <Img fluid={pageImage} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
