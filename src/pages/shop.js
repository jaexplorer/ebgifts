import React from "react";
import "../assets/scss/main/main.css";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";
import ShopBanner from "../components/layout/shop/ShopBanner";
import ShopItems from "../components/layout/shop/ShopItems";
import ShopOptions from "../components/layout/shop/ShopOptions";

const ShopPage = ({ data }) => {
  const products = data.allContentfulProduct.edges;

  return (
    <Layout>
      <SEO title="Shop" />
      <ShopBanner />
      <div className="shop container">
        <ShopItems products={products} />
        <ShopOptions products={products.map(e => e.node)} />
      </div>
    </Layout>
  );
};

export default ShopPage;

export const query = graphql`
  query ProductPageQuery {
    allContentfulProduct(limit: 1000) {
      edges {
        node {
          id
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
          subcategories
          size {
            size
          }
          colours
          slug
        }
      }
    }
  }
`;
