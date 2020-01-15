import React, { useEffect, useState } from "react";
import FeedItem from "./FeedItem";
import axios from "axios";

const InstagramFeed = () => {
  const [feed, setFeed] = useState(false);
  const getFeed = async () => {
    const res = await axios.get(process.env.INSTAGRAM_KEY);
    setFeed(res.data.data);
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="instafeed container">
      <h1>Latest Work</h1>
      <h2>- Lorem ipsum dolor sit amet. -</h2>
      {console.log(feed)}
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
