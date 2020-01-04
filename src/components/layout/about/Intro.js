import React from "react";
import AuthorPic from "../../../assets/images/author.jpg";
import FacebookIcon from "../../../assets/images/facebook-black.png";
import InstagramIcon from "../../../assets/images/instagram-black.png";
import AboutPic from "../../../assets/images/img-about.jpg";

const Intro = () => {
  return (
    <div className="about-intro container">
      <div className="welcome">
        <div className="author-container">
          <div className="author-pic">
            <img src={AuthorPic} alt="" />
          </div>
          <div className="author-info">
            <h1>WELCOME</h1>
            <h2>
              Hello! I am Elyse Barcellona <br />
              Founder of EBGifts
            </h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          modi sequi, nesciunt velit iusto repudiandae asperiores porro dicta
          labore possimus excepturi deserunt mollitia rerum voluptatum
          laboriosam sapiente aliquid ullam nemo voluptatibus, voluptatem, neque
          fugiat inventore est. Soluta at consequuntur a!
        </p>
        <div className="links-social">
          <span>CONNECT WITH US: </span>
          <span>
            <img src={FacebookIcon} alt="" />
          </span>
          <span>
            <img src={InstagramIcon} alt="" />
          </span>
        </div>
      </div>
      <div className="img-about">
        <img src={AboutPic} alt="" />
      </div>
    </div>
  );
};

export default Intro;
