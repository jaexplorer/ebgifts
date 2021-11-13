import React, { FC } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

interface ShopWorkViewProps {
  title: string;
  description: string;
  img: any;
}

const ShopWorkView: FC<ShopWorkViewProps> = ({ title, description, img }) => {
  return (
    <>
      <div className="work-container">
        <div data-aos="fade-right" className="description">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="work-action">
            <button style={{ marginLeft: "1rem" }}>
              <Link
                to={`/contact?message=Hi Elyse,\n I'm interested in ordering - ${title} hampers`}
              >
                Order now
              </Link>
            </button>
          </div>
        </div>
        <div data-aos="fade-left" className="page-image">
          <Img fluid={img} />
        </div>
      </div>
    </>
  );
};
export default ShopWorkView;
