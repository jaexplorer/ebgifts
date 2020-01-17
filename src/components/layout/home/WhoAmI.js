import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const WhoAmI = () => {
  const data = useStaticQuery(graphql`
    query {
      WhoAmIBG: file(relativePath: { eq: "who.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      Me: file(relativePath: { eq: "author.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      allContentfulTextContent {
        edges {
          node {
            whoAmIText {
              whoAmIText
            }
          }
        }
      }
    }
  `);
  const WhoAmIBG = data.WhoAmIBG.childImageSharp.fluid;
  const Me = data.Me.childImageSharp.fluid;

  const { whoAmIText } = data.allContentfulTextContent.edges.map(
    e => e.node
  )[0];

  return (
    <div className="whoami">
      <div className="whoami-img">
        <Img fluid={WhoAmIBG} />
      </div>
      <div className="who-content">
        <div className="who">
          <h1>who am i ?</h1>
          <h2>who am i ?</h2>
        </div>
        <p>{whoAmIText.whoAmIText}</p>
        <div className="me">
          <div className="author-pic">
            <Img fluid={Me} />
          </div>
          <div className="info">
            <h4>Elyse Barcellona</h4>
            <span>Founder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
