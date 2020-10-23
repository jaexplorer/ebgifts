import React from "react";
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
      AboutBG: file(relativePath: { eq: "present.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allContentfulAboutPage {
        edges {
          node {
            aboutHeader {
              aboutHeader
            }
          }
        }
      }
    }
  `);

  const {
    aboutHeader: { aboutHeader },
  } = data.allContentfulAboutPage.edges.map(e => e.node)[0];

  return (
    <Layout>
      <SEO title="About" />
      <PageBanner
        title={"About Us"}
        subtext={aboutHeader}
        backgroundImg={data.AboutBG.childImageSharp.fluid}
      />
      <Intro />
      <Services />
      <SeeMore />
    </Layout>
  );
};

export default AboutPage;
