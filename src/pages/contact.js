import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";
import PageBanner from "../components/layout/hero/PageBanner";
import ContactInfo from "../components/layout/contact/ContactInfo";
import ContactUs from "../components/layout/contact/ContactUs";

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      ContactBG: file(relativePath: { eq: "BG-title-v3.jpg" }) {
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
      <SEO title="Contact" />
      <PageBanner
        title={"Contact Us"}
        subtext={`It is a long established fact that a reader will
be distracted by the readable content of a page when looking at its layout`}
        backgroundImg={data.ContactBG.childImageSharp.fluid}
      />
      <ContactInfo />
      <ContactUs />
    </Layout>
  );
};

export default ContactPage;
