import React from "react";
import Layout from "../components/layout/layout";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/common/seo";
import PageBanner from "../components/layout/hero/PageBanner";
import Intro from "../components/layout/giftWrapping/Intro";
import Img from "gatsby-image";

const GiftWrappingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      GiftWrappingBG: file(relativePath: { eq: "holiday.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allContentfulGiftWrappingPage {
        edges {
          node {
            pageImage {
              fluid(maxWidth: 1000) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            title
            table {
              internal {
                content
              }
            }
            tableImages {
              title
              fluid(maxWidth: 500) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            finePrint {
              finePrint
            }
            description {
              description
            }
          }
        }
      }
    }
  `);

  const {
    title,
    description: { description },
    pageImage,
    table: {
      internal: { content },
    },
    finePrint: { finePrint },
    tableImages,
  } = data.allContentfulGiftWrappingPage.edges.map(e => e.node)[0];

  const tableData = JSON.parse(content).tableData;
  const tableHeaders = tableData[0];
  const tableRows = tableData.slice(1);

  return (
    <Layout>
      <SEO title="Gift Wrapping" />
      <Intro
        title={title}
        description={description}
        pageImage={pageImage.fluid}
        BGImage={data.GiftWrappingBG.childImageSharp.fluid}
      />
      <table className="table container">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map(row => (
            <tr>
              {row.map((item, index) => (
                <td key={index}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-images container">
        {tableImages.map((image, index) => (
          <div className="table-image" key={index}>
            <h1>{image.title}</h1>
            <Img fluid={image.fluid} />
          </div>
        ))}
      </div>

      <p className="fine-print container">{finePrint}</p>
    </Layout>
  );
};

export default GiftWrappingPage;
