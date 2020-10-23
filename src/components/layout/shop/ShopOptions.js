import React from "react";

const ShopOptions = ({
  products,
  setCategory,
  categorySelected,
  sizeSelected,
  setSize,
}) => {
  const sizes = products
    .map(s => s.sizes)
    .filter(Boolean)
    .map(Object.values)
    .flat();

  const categories = [...new Set(products.map(c => c.categories).flat())];

  const getOcc = (arr, val) => {
    return arr.filter(c => c === val).length;
  };

  const changeCategory = value => {
    if (value === categorySelected) {
      setCategory(false);
    } else {
      setCategory(value);
    }
  };

  const changeSize = value => {
    if (value === sizeSelected) {
      setSize(false);
    } else {
      setSize(value);
    }
  };

  return (
    <div data-aos="fade-left" className="shop-options">
      <ul className="option">
        <li className="heading">Categories</li>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`${categorySelected === category ? "active" : ""} bold`}
            onClick={() => changeCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <ul className="option">
        <li className="heading">Size</li>
        <li
          className={`${sizeSelected === "Small" ? "active" : ""}`}
          onClick={() => changeSize("Small")}
        >
          Small
          <span>({getOcc(sizes, "Small")})</span>
        </li>
        <li
          className={`${sizeSelected === "Medium" ? "active" : ""}`}
          onClick={() => changeSize("Medium")}
        >
          Medium
          <span>({getOcc(sizes, "Medium")})</span>
        </li>
        <li
          className={`${sizeSelected === "Large" ? "active" : ""}`}
          onClick={() => changeSize("Large")}
        >
          Large
          <span>({getOcc(sizes, "Large")})</span>
        </li>
      </ul>
    </div>
  );
};

export default ShopOptions;
