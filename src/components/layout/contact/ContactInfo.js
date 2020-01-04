import React from "react";
import AddressPic from "../../../assets/images/Our-Address.png";
import PhonePic from "../../../assets/images/Phone-Number.png";
import EmailPic from "../../../assets/images/Email-Address.png";

const ContactInfo = () => {
  return (
    <div className="contact-info container">
      <div className="contact-container">
        <img src={AddressPic} alt="" />
        <h1>Our Address</h1>
        <h2>Gisborne, Victoria, Australia</h2>
      </div>
      <div className="contact-container">
        <img src={PhonePic} alt="" />
        <h1>Phone Number</h1>
        <h2>0433 891 097</h2>
      </div>
      <div className="contact-container">
        <img src={EmailPic} alt="" />
        <h1>Email Address</h1>
        <h2>ebgiftservices@gmail.com</h2>
      </div>
    </div>
  );
};

export default ContactInfo;
