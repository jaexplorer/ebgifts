import React from "react";
import Layout from "../components/layout/layout";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/common/seo";
import PageBanner from "../components/layout/hero/PageBanner";

const PersonalShoppingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      ShoppingBG: file(relativePath: { eq: "shopping2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Personal Shopping" />
      <PageBanner
        title={"Personal Shopping"}
        backgroundImg={data.ShoppingBG.childImageSharp.fluid}
      />
      <h1 className="container unavailable">
        Unavailable at this time due to COVID19
      </h1>
      <p className="container unavailableText">
        Sorry whilst in this time of uncertainty, travel rescrictions and health
        risks I am unable to provide this service at this point in time. Please
        check back soon for updates.
      </p>
    </Layout>
  );
};

export default PersonalShoppingPage;
