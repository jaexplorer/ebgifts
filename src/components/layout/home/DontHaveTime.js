import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const DontHaveTime = () => {
  const data = useStaticQuery(graphql`
    query {
      TimePic: file(relativePath: { eq: "counter.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      allContentfulHomePage {
        edges {
          node {
            timeText {
              timeText
            }
          }
        }
      }
    }
  `);

  const TimePic = data.TimePic.childImageSharp.fluid;
  const { timeText } = data.allContentfulHomePage.edges.map(e => e.node)[0];

  return (
    <div data-aos="fade-up" className="donthavetime">
      <div className="donthavetime-img">
        <Img fluid={TimePic} />
      </div>
      <div className="donthavetime-content">
        <h1>Don't have time ?</h1>
        <p>{timeText.timeText}</p>
        <Link to="/shop">
          <button>Shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default DontHaveTime;
