import React from "react";
import "../assets/scss/main/main.css";
import Layout from "../components/layout/layout";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/common/seo";
import PageBanner from "../components/layout/hero/PageBanner";
import Intro from "../components/layout/about/Intro";
import Services from "../components/layout/about/Services";

import SeeMore from "../components/layout/about/SeeMore";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      AboutBG: file(relativePath: { eq: "BG-title-v3.jpg" }) {
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
      <SEO title="About" />
      <PageBanner
        title={"About Us"}
        subtext={`It is a long established fact that a reader will
be distracted by the readable content of a page when looking at its layout`}
        backgroundImg={data.AboutBG.childImageSharp.fluid}
      />
      <Intro />
      <Services />
      <SeeMore />
    </Layout>
  );
};

export default AboutPage;
