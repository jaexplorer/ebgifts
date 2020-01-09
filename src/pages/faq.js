import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";
import PageBanner from "../components/layout/hero/PageBanner";

const FAQPage = () => {
  const data = useStaticQuery(graphql`
    query {
      FAQBG: file(relativePath: { eq: "BG-title-v3.jpg" }) {
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
      <SEO title="FAQs" />
      <PageBanner
        title={"FAQs"}
        subtext={`It is a long established fact that a reader will
be distracted by the readable content of a page when looking at its layout`}
        backgroundImg={data.FAQBG.childImageSharp.fluid}
      />
      <div className="faq-container container">
        <div className="faq-subject">
          <h1>Shopping information</h1>
          <div className="faq-wrapper">
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-subject">
          <h1>Payment information</h1>
          <div className="faq-wrapper">
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-subject">
          <h1>Orders / Delivery & Returns</h1>
          <div className="faq-wrapper">
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
            <div className="faq-content">
              <h2>What Shipping Methods Are Available?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ipsum doloremque quo adipisci ut omnis, velit et praesentium
                repudiandae hic ipsam sint, dolores neque vero ipsa perferendis
                id maxime pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
