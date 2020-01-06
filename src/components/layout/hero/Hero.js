import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Pattern from "../../../assets/images/Pattern.png";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      HeroImg: file(relativePath: { eq: "slider-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div className="hero-container">
      <div className="hero-img">
        <Img fluid={data.HeroImg.childImageSharp.fluid} />
      </div>
      <div className="hero-banner">
        <h3>EXPLORE THE</h3>
        <h1>New Arrivals</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout
        </p>
        <img src={Pattern} alt="" />
        <Link to="/shop">Shop now</Link>
      </div>
    </div>
  );
};

export default Hero;
