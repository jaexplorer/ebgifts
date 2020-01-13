import React, { useState } from "react";

const ShopOptions = ({ products }) => {
  const [expandColour, setExpandColour] = useState(false);
  const [options] = useState({
    categories: [...new Set(products.map(c => c.categories).flat())],
    colours: [...new Set(products.map(c => c.colours).flat())],
    sizes: products
      .map(s => s.size)
      .filter(Boolean)
      .map(Object.values)
      .flat(),
    subcategories: [...new Set(products.map(s => s.subcategories).flat())],
    totalSubCat: products.map(s => s.subcategories).flat(),
  });

  const getOcc = (arr, val) => {
    return arr.filter(c => c === val).length;
  };

  return (
    <div className="shop-options">
      <ul className="option">
        {console.log(options, "Yay")}
        <li className="heading">Categories</li>
        <li className="bold">Testing</li>
        <li className="bold">Testing</li>
        <li className="bold">Testing</li>
      </ul>
      <ul className="option">
        <li className="heading">Colour</li>
        <div className={`colour-options ${expandColour ? "hide" : "expand"}`}>
          {options.colours.map((colour, index) => (
            <div key={index} style={{ background: `${colour}` }}></div>
          ))}
        </div>
        <li
          onMouseDown={() => setExpandColour(!expandColour)}
          className="see-more"
        >
          See {expandColour ? "Less" : "More"}
        </li>
      </ul>
      <ul className="option">
        <li className="heading">Size</li>
        <li>
          XS <span className="occurances">({getOcc(options.sizes, "XS")})</span>
        </li>
        <li>
          S<span className="occurances">({getOcc(options.sizes, "S")})</span>
        </li>
        <li>
          M<span className="occurances">({getOcc(options.sizes, "M")})</span>
        </li>
        <li>
          L<span className="occurances">({getOcc(options.sizes, "L")})</span>
        </li>
        <li>
          XL<span className="occurances">({getOcc(options.sizes, "XL")})</span>
        </li>
      </ul>
      <ul className="option">
        <li className="heading">Subcategory</li>
        {options.subcategories.map((sub, index) => (
          <li key={index}>
            {sub}
            <span className="occurances">
              ({getOcc(options.totalSubCat, sub)})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopOptions;
