import React from "react";
import WhoAmIBG from "../../../assets/images/who.png";
import Me from "../../../assets/images/author.jpg";

const WhoAmI = () => {
  return (
    <div className="whoami">
      <img src={WhoAmIBG} alt="" />
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
            <img src={Me} alt="" />
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
