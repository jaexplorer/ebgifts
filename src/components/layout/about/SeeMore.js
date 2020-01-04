import React from "react";
import InstagramPic from "../../../assets/images/instagram-black.png";
import DeliveryPic from "../../../assets/images/time-about.png";
import FAQPic from "../../../assets/images/speech-bubble.png";

const SeeMore = () => {
  return (
    <div className="seemore-wrapper container">
      <h1>See More</h1>
      <div className="seemore-info">
        <div className="seemore-container">
          <img src={InstagramPic} alt="" />
          <h1>Our Work</h1>
        </div>
        <div className="seemore-container">
          <img src={FAQPic} alt="" />
          <h1>FAQs</h1>
        </div>
        {/* <div className="seemore-container">
          <img src={DeliveryPic} alt="" />
          <h1>Delivery & Returns</h1>
        </div> */}
      </div>
    </div>
  );
};

export default SeeMore;
