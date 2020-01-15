import React, { useEffect, useState } from "react";
import FeedItem from "./FeedItem";
import axios from "axios";

const InstagramFeed = () => {
  const [feed, setFeed] = useState(false);
  const getFeed = async () => {
    try {
      const res = await axios.get(`${process.env.INSTAGRAM_KEY}`);
      setFeed(res.data.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="instafeed container">
      <h1>Latest Work</h1>
      <h2>- Lorem ipsum dolor sit amet. -</h2>
      <div className="feed-container">
        {feed &&
          feed
            .slice(0, 12)
            .map((feedItem, index) => (
              <FeedItem feedItem={feedItem} key={index} />
            ))}
      </div>
    </div>
  );
};
export default InstagramFeed;
