import React from "react";
import { useStaticQuery, graphql } from "gatsby";
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
    }
  `);

  return (
    <div className="donthavetime">
      <div className="donthavetime-img">
        <Img fluid={data.TimePic.childImageSharp.fluid} />
      </div>
      <div className="donthavetime-content">
        <h1>Don't have time ?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim cumque
          amet exercitationem aperiam asperiores non et iste dignissimos quam
          nostrum.
        </p>
        <button>Shop now</button>
      </div>
    </div>
  );
};

export default DontHaveTime;
