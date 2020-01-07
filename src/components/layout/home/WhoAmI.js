import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
// import Me from "../../../assets/images/author.jpg";

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
    }
  `);

  return (
    <div className="whoami">
      <div className="whoami-img">
        <Img fluid={data.WhoAmIBG.childImageSharp.fluid} />
      </div>
      <div className="who-content">
        <div className="who">
          <h1>who am i ?</h1>
          <h2>who am i ?</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
          earum vel. Nam corrupti quia tempore est repellat vitae omnis quod
          quis, totam aliquid laudantium odio quaerat assumenda voluptatem vel
          adipisci dolorum, mollitia tenetur. Temporibus fugiat aperiam aut rem
          dicta eius harum magnam iste id fugit, modi soluta error consequuntur
          reiciendis.
        </p>
        <div className="me">
          <div className="author-pic">
            <Img fluid={data.Me.childImageSharp.fluid} />
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
