import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import AuthorPic from "../../../assets/images/author.jpg";
import FacebookIcon from "../../../assets/images/facebook-black.png";
import InstagramIcon from "../../../assets/images/instagram-black.png";

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      AboutPic: file(relativePath: { eq: "img-about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allContentfulAboutPage {
        edges {
          node {
            aboutBody {
              aboutBody
            }
          }
        }
      }
    }
  `);

  const AboutPic = data.AboutPic.childImageSharp.fluid;
  const {
    aboutBody: { aboutBody },
  } = data.allContentfulAboutPage.edges.map(e => e.node)[0];

  return (
    <div className="about-intro container">
      <div data-aos="fade-right" className="welcome">
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
        <p>{aboutBody}</p>
        <div className="links-social">
          <span>CONNECT WITH ME: </span>
          <span>
            <a
              aria-label="My Facebook"
              href="https://www.facebook.com/EBgifts/"
            >
              <img src={FacebookIcon} alt="" />
            </a>
          </span>
          <span>
            <a
              aria-label="My Instagram"
              href="https://www.instagram.com/eb.gifts/"
            >
              <img src={InstagramIcon} alt="" />
            </a>
          </span>
        </div>
      </div>
      <div data-aos="fade-left" className="img-about">
        <Img fluid={AboutPic} />
      </div>
    </div>
  );
};

export default Intro;
