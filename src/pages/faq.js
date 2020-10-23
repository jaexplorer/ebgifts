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
      allContentfulFaqPage {
        edges {
          node {
            faqHeader {
              faqHeader
            }
            faqQuestions {
              internal {
                content
              }
            }
          }
        }
      }
    }
  `);

  const {
    faqHeader: { faqHeader },
    faqQuestions,
  } = data.allContentfulFaqPage.edges.map(e => e.node)[0];

  const questions = () => {
    let result = [];
    faqQuestions.map(subject =>
      result.push(JSON.parse(subject.internal.content))
    );
    console.log(result);
    return result;
  };

  questions();

  return (
    <Layout>
      <SEO title="FAQs" />
      <PageBanner
        title={"FAQs"}
        subtext={faqHeader}
        backgroundImg={data.FAQBG.childImageSharp.fluid}
      />
      <div className="faq-container container">
        {questions().map(subject =>
          Object.entries(subject).map(([key, value]) => (
            <div className="faq-subject">
              <h1>{key}</h1>
              <div className="faq-wrapper">
                {value.map(question => (
                  <>
                    {Object.entries(question).map(([key, value]) => (
                      <div className="faq-content">
                        <h2>{key}</h2>
                        <p>{value}</p>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default FAQPage;
