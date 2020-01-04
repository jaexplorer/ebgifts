import React, { useEffect, useState } from "react";
import FeedItem from "./FeedItem";
import axios from "axios";

const InstagramFeed = () => {
  const [feed, setFeed] = useState(false);
  const getFeed = async () => {
    const res = await axios.get(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=21253163367.1677ed0.16e4941ab2f04e6da1697bf6775f58ee`
    );
    setFeed(res.data.data);
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
//user id: 21253163367
// assess 21253163367.1677ed0.16e4941ab2f04e6da1697bf6775f58ee
export default InstagramFeed;
