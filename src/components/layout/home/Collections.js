import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Collections = () => {
  const data = useStaticQuery(graphql`
    query {
      CollectionPic: file(relativePath: { eq: "collection.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      ShoppingPic: file(relativePath: { eq: "shopping.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      GiftPic: file(relativePath: { eq: "gifts.jpg" }) {
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
    <div data-aos="fade-up" className="collections container">
      <h1>What we do</h1>
      <h2>- EbGift Services -</h2>
      <div className="collections-wrapper">
        <div className="calltoaction">
          <Img fluid={data.CollectionPic.childImageSharp.fluid} />
          <div className="content">
            <h2>HELLO FREEDOM</h2>
            <h1>Free Delivery</h1>
            <Link to="/shop">
              <button>Show Now</button>
            </Link>
          </div>
        </div>
        <div className="collections-container">
          <div className="collection-row">
            <Link to="/shop" className="collection-item">
              <div>
                <Img fluid={data.ShoppingPic.childImageSharp.fluid} />
              </div>
              <h3>Gift Shopping</h3>
            </Link>
            <Link to="/shop" className="collection-item">
              <div>
                <Img fluid={data.HamperPic.childImageSharp.fluid} />
              </div>
              <h3>Hampers</h3>
            </Link>
          </div>
          <div className="collection-row">
            <Link to="/shop" className="collection-item">
              <div>
                <Img fluid={data.WrappingPic.childImageSharp.fluid} />
              </div>
              <h3>Wrapping</h3>
            </Link>
            <Link to="/shop" className="collection-item">
              <div>
                <Img fluid={data.GiftPic.childImageSharp.fluid} />
              </div>
              <h3>Gifts</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
