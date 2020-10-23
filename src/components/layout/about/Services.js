import React from "react";
import ServicesBG from "../../../assets/images/wedding.png";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      ShoppingPic: file(relativePath: { eq: "shopping.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      HamperPic: file(relativePath: { eq: "hampers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      WrappingPic: file(relativePath: { eq: "wrapping.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div data-aos="fade-up" className="services">
      <h1>Services</h1>
      <h2>- What I offer -</h2>

      <div className="services-container">
        <img src={ServicesBG} alt="" />
        <div className="services-content container">
          <Link to="/shop" className="service">
            <div>
              <Img fluid={data.HamperPic.childImageSharp.fluid} />
            </div>
            <h2>Hampers</h2>
          </Link>
          <Link to="/personalShopping" className="service">
            <div>
              <Img fluid={data.ShoppingPic.childImageSharp.fluid} />
            </div>
            <h2>Personal Shopping</h2>
          </Link>
          <Link to="/giftWrapping" className="service">
            <div>
              <Img fluid={data.WrappingPic.childImageSharp.fluid} />
            </div>
            <h2>Gift Wrapping</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
