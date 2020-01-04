import React from "react";
import ServicesBG from "../../../assets/images/wedding.png";

const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <h2>
        - Lorem Ipsum is<span class="hidden-xs"> simply dummy</span> text of the
        printing -
      </h2>

      <div className="services-container">
        <img src={ServicesBG} alt="" />
        <div className="services-content container">
          <div className="service">
            <div></div>
            <h2>Gift Wrapping</h2>
          </div>
          <div className="service">
            <div></div>
            <h2>Present stuffs</h2>
          </div>
          <div className="service">
            <div></div>
            <h2>Shopping</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
