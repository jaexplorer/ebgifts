import React from "react";
import Placeholder from "../../../assets/images/placeholder.png";

const Testimonials = () => {
  return (
    <div className="feedback container">
      <div className="feedback-title">
        <h1>What Customers Say</h1>
        <h2>,,</h2>
      </div>
      <div className="feedback-customer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          magnam, molestias, libero quo, nostrum ratione assumenda debitis
          aliquam mollitia id deleniti deserunt.
        </p>
        <img src={Placeholder} alt="" />
        <div className="customer-name">
          <span>John Smith - </span>
          <span>Customer</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
