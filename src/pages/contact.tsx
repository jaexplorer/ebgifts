import React, { useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";
import PageBanner from "../components/layout/hero/PageBanner";
import ContactInfo from "../components/layout/contact/ContactInfo";
import ContactUs from "../components/layout/contact/ContactUs";
import { useQueryParam, StringParam } from "use-query-params";

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
      allContentfulContactPage {
        edges {
          node {
            contactHeader {
              contactHeader
            }
          }
        }
      }
    }
  `);

  const {
    contactHeader: { contactHeader },
  } = data.allContentfulContactPage.edges.map(e => e.node)[0];

  return (
    <Layout>
      <SEO title="Contact" />
      <PageBanner
        title={"Contact Us"}
        subtext={contactHeader}
        backgroundImg={data.ContactBG.childImageSharp.fluid}
      />
      <ContactInfo />
      <div>
        <ContactUs />
      </div>
    </Layout>
  );
};

export default ContactPage;
