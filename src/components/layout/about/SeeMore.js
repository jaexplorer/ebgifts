import React from "react";
import InstagramPic from "../../../assets/images/instagram-black.png";
import FAQPic from "../../../assets/images/speech-bubble.png";
import { Link } from "gatsby";

const SeeMore = () => {
  return (
    <div data-aos="fade-up" className="seemore-wrapper container">
      <h1>See More</h1>
      <div className="seemore-info">
        <a
          aria-label="My Instagram"
          href="https://www.instagram.com/eb.gifts/"
          className="seemore-container"
        >
          <img src={InstagramPic} alt="" />
          <h1>Our Work</h1>
        </a>
        <Link to="/faq" className="seemore-container">
          <img src={FAQPic} alt="" />
          <h1>FAQs</h1>
        </Link>
      </div>
    </div>
  );
};

export default SeeMore;
