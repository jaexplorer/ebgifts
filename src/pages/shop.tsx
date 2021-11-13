import React, { useState, useEffect } from "react";
import "../assets/scss/main/main.css";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";
import ShopBanner from "../components/layout/shop/ShopBanner";
import ShopItems from "../components/layout/shop/ShopItems";
import ShopOptions from "../components/layout/shop/ShopOptions";
import ShopWorkView from "../components/layout/shop/ShopWorkView";
import { graphql } from "gatsby";
import { ShopWork } from "../constants/Constants";
import Img from "gatsby-image";

const ShopPage = ({ data }) => {
  const initialState = data.allContentfulProduct.edges;
  const [category, setCategory] = useState(false);
  const [size, setSize] = useState(false);
  const [products, setProducts] = useState(initialState);
  const [workType, setWorkType] = useState(ShopWork.CURATED);

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
      <ShopBanner workType={workType} setWorkType={setWorkType} />
      <div className="shop container">
        {workType === ShopWork.CORPORATE && (
          <ShopWorkView
            title={data.allContentfulCorporatePage.edges[0].node.title}
            description={
              data.allContentfulCorporatePage.edges[0].node.description
                .description
            }
            img={data.CorporateImg.childImageSharp.fluid}
          />
        )}
        {workType === ShopWork.CURATED && (
          <>
            <ShopItems products={products} />
            <ShopOptions
              products={initialState.map(e => e.node)}
              categorySelected={category}
              setCategory={value => setCategory(value)}
              sizeSelected={size}
              setSize={value => setSize(value)}
            />
          </>
        )}
        {workType === ShopWork.CUSTOM && (
          <ShopWorkView
            title={data.allContentfulCustomPage.edges[0].node.title}
            description={
              data.allContentfulCustomPage.edges[0].node.description.description
            }
            img={data.CustomImg.childImageSharp.fluid}
          />
        )}
      </div>
    </Layout>
  );
};

export default ShopPage;

export const query = graphql`
  query ProductPageQuery {
    CorporateImg: file(relativePath: { eq: "corporate.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    CustomImg: file(relativePath: { eq: "custom.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
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
    allContentfulCorporatePage {
      edges {
        node {
          title
          description {
            description
          }
        }
      }
    }
    allContentfulCustomPage {
      edges {
        node {
          title
          description {
            description
          }
        }
      }
    }
  }
`;
