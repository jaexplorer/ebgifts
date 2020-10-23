import React, { useState } from "react";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";

const ProductTemplate = ({ data }) => {
  const [mainImg, setMainImg] = useState(
    data.contentfulProduct.images[0].fluid
  );
  const {
    title,
    caption,
    description,
    images,
    sizes,
    price,
  } = data.contentfulProduct;

  return (
    <Layout>
      <SEO title={title} />
      <div className="product container">
        <div className="pagination">
          <Link to="/">Home</Link>
          <span></span>
          <Link to="/shop">Shop</Link>
          <span></span>
          <span>{title}</span>
        </div>
        <div className="product-wrapper">
          <div className="product-images">
            <div className="main-image">
              <Img fluid={mainImg} />
            </div>
            <div className="other-images">
              {images.map((image, index) => (
                <div
                  className="img-container"
                  onClick={() => setMainImg(images[index].fluid)}
                >
                  <Img fluid={image.fluid} key={index} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="product-info">
            <h2>{title}</h2>
            <p>{caption.caption}</p>
            {price && <h2>${price}</h2>}
            <h3>Options</h3>
            <div className="options">
              {console.log(sizes)}
              <div className="size">
                <h4>Sizes available</h4>
                {sizes.map((size, index) => (
                  <p>{size}</p>
                ))}
              </div>
            </div>
            <div className="product-action">
              <button>
                <Link to="/shop">Back</Link>
              </button>
              <button style={{ marginLeft: "1rem" }}>
                <Link to="/contact">Contact</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="product-description">
          <h2>Description</h2>
          <p>{description.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ProductTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      images {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      title
      caption {
        caption
      }
      description {
        description
      }
      price
      categories
      sizes
      slug
    }
  }
`;
