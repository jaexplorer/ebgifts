import React from "react";

const PageBanner = ({ title, subtext, backgroundImg }) => {
  return (
    <div className="banner container">
      <img src={backgroundImg} alt="" />

      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtext}</p>
      </div>
    </div>
  );
};

export default PageBanner;
