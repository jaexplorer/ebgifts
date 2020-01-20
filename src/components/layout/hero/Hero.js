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
      allContentfulTextContent {
        edges {
          node {
            homeSubtitle
            homeTitle
            homeTitleText {
              homeTitleText
            }
          }
        }
      }
    }
  `);

  const HeroImg = data.HeroImg.childImageSharp.fluid;
  const {
    homeSubtitle,
    homeTitle,
    homeTitleText,
  } = data.allContentfulTextContent.edges.map(e => e.node)[0];

  return (
    <div className="hero-container">
      <div className="hero-img">
        <Img fluid={HeroImg} />
      </div>
      <div data-aos="fade-down" className="hero-banner">
        <h3>{homeSubtitle}</h3>
        <h1>{homeTitle}</h1>
        <p>{homeTitleText.homeTitleText}</p>
        <img src={Pattern} alt="" />
        <Link to="/shop">Shop now</Link>
      </div>
    </div>
  );
};

export default Hero;
