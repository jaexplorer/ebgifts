import React from "react";
import Img from "gatsby-image";

const PageBanner = ({ title, subtext, backgroundImg }) => {
  return (
    <div className="banner container">
      <Img fluid={backgroundImg} />
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtext}</p>
      </div>
    </div>
  );
};

export default PageBanner;
