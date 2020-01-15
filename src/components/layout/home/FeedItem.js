import React from "react";
import PropTypes from "prop-types";
import CalendarPic from "../../../assets/images/calendar.png";
import HeartPic from "../../../assets/images/heart.png";
import moment from "moment";

const FeedItem = ({ feedItem }) => {
  const { images, likes, caption, link, created_time } = feedItem;
  var date = moment(new Date(created_time * 1000));
  return (
    <div className="feedItem">
      {console.log("This Shows")}
      <a href={link} aria-label={`${caption.text.split(".")[0]}`}>
        <img src={images.standard_resolution.url} alt="" />
      </a>

      <div className="item-info">
        <img src={CalendarPic} alt="" />
        <span>{date.format("ll")}</span>
        <span>|</span>
        <img src={HeartPic} alt="" />
        <span>{likes.count} likes</span>
      </div>
      <p>{caption.text.split(".")[0]}</p>
    </div>
  );
};

FeedItem.propTypes = {
  feedItem: PropTypes.object.isRequired,
};

export default FeedItem;
