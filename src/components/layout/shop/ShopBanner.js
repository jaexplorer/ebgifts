import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ShopBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      ShopBG: file(relativePath: { eq: "banner-shop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div className="shopbanner container">
      <Img fluid={data.ShopBG.childImageSharp.fluid} />
      <div className="shopbanner-content container">
        <h1>
          New <br />
          Items
        </h1>
        <h2>SHOP NOW</h2>
      </div>
    </div>
  );
};

export default ShopBanner;
