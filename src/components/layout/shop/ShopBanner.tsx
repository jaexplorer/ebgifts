import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ShopWork } from "../../../constants/Constants";

interface ShopBannerProps {
  workType: ShopWork;
  setWorkType: (value: ShopWork) => void;
}

const ShopBanner: FC<ShopBannerProps> = ({ workType, setWorkType }) => {
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
    <>
      <div className="shopbanner container">
        <Img fluid={data.ShopBG.childImageSharp.fluid} />
        <div className="shopbanner-content container">
          <h1>Hampers</h1>
          <h2>SHOP NOW</h2>
        </div>
      </div>
      <div className="shop-works container">
        {Object.keys(ShopWork).map(shopWork => (
          <div
            className={`shop-work ${
              shopWork === workType ? "active" : undefined
            }`}
            onClick={() => setWorkType(shopWork as ShopWork)}
          >
            <h3>{shopWork}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopBanner;
