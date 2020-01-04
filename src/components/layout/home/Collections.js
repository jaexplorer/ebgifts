import React from "react";
import CollectionPic from "../../../assets/images/collection.png";

const Collections = () => {
  return (
    <div className="collections container">
      <h1>What we do</h1>
      <h2>- All Category of EbGifts -</h2>
      <div className="collections-wrapper">
        <div className="calltoaction">
          <img src={CollectionPic} alt="" />
          <div className="content">
            <h2>HELLO SUMMER</h2>
            <h1>Free Delivery</h1>
            <button>Show Now</button>
          </div>
        </div>
        <div className="collections-container">
          <div className="collection-row">
            <div className="collection-item">
              <div></div>
              <h3>Testing</h3>
            </div>
            <div className="collection-item">
              <div></div>
              <h3>Testing</h3>
            </div>
          </div>
          <div className="collection-row">
            <div className="collection-item">
              <div></div>
              <h3>Testing</h3>
            </div>
            <div className="collection-item">
              <div></div>
              <h3>Testing</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
