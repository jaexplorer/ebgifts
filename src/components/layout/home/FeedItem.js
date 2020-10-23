import React from "react";
import PropTypes from "prop-types";
import CalendarPic from "../../../assets/images/calendar.png";
import HeartPic from "../../../assets/images/heart.png";
import moment from "moment";

const FeedItem = ({ feedItem }) => {
  const { caption, media_url, timeStamp } = feedItem;
  var date = moment(timeStamp);
  return (
    <div className="feedItem">
      <a href={media_url}>
        <img src={media_url} alt="" />
      </a>

      <div className="item-info">
        <img src={CalendarPic} alt="" />
        <span>{date.format("ll")}</span>
        <span>|</span>
        {/* <img loading="lazy" src={HeartPic} alt="" /> */}
        {/* <span>{likes.count} likes</span> */}
      </div>
      <p>{caption.split(".")[0]}</p>
    </div>
  );
};

FeedItem.propTypes = {
  feedItem: PropTypes.object.isRequired,
};

export default FeedItem;
