import React, { useState, useEffect } from "react";
import "../assets/scss/main/main.css";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";
import ShopBanner from "../components/layout/shop/ShopBanner";
import ShopItems from "../components/layout/shop/ShopItems";
import ShopOptions from "../components/layout/shop/ShopOptions";

const ShopPage = ({ data }) => {
  const initialState = data.allContentfulProduct.edges;
  const [category, setCategory] = useState(false);
  const [size, setSize] = useState(false);
  const [products, setProducts] = useState(initialState);

  useEffect(() => {
    let result = initialState;

    if (category !== false) {
      result = result.filter(product => {
        let result = false;
        product.node.categories.map(c => {
          if (c === category) {
            result = true;
          }
        });
        return result;
      });
    }
    if (size !== false) {
      result = result.filter(product => {
        let result = false;
        product.node.sizes.map(s => {
          if (s === size) {
            result = true;
          }
        });
        return result;
      });
    }
    setProducts(result);
  }, [category, size]);

  return (
    <Layout>
      <SEO title="Shop" />
      <ShopBanner />
      <div className="shop container">
        <ShopItems products={products} />
        <ShopOptions
          products={initialState.map(e => e.node)}
          categorySelected={category}
          setCategory={value => setCategory(value)}
          sizeSelected={size}
          setSize={value => setSize(value)}
        />
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
          sizes
          categories
          slug
        }
      }
    }
  }
`;
