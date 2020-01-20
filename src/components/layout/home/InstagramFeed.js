import React, { useEffect, useState } from "react";
import FeedItem from "./FeedItem";
import axios from "axios";

const InstagramFeed = () => {
  const [feed, setFeed] = useState(false);
  const getFeed = async () => {
    const res = await axios.get(process.env.GATSBY_INSTAGRAM_KEY);
    setFeed(res.data.data);
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div data-aos="fade-up" className="instafeed container">
      <h1>Latest Work</h1>
      <h2>- See my Instagram Below -</h2>
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
