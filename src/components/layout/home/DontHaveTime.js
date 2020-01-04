import React from "react";
import TimePic from "../../../assets/images/counter.png";

const DontHaveTime = () => {
  return (
    <div className="donthavetime">
      <img src={TimePic} alt="" />
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
