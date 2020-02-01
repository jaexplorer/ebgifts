import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ShopItems = ({ products }) => {
  return (
    <div data-aos="fade-up" className="shop-items">
      {products.map(({ node: item }) => (
        <div className="item" key={item.id}>
          <Link to={`/shop/${item.slug}`} className="img-container">
            <Img fluid={item.images[0].fluid} />
          </Link>
          <Link to={`/shop/${item.slug}`}>{item.title}</Link>
          {/* <h4>${item.price}</h4> */}
        </div>
      ))}
    </div>
  );
};

export default ShopItems;
