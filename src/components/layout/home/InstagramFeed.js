import React, { useEffect, useState } from "react";
import FeedItem from "./FeedItem";
import axios from "axios";

const InstagramFeed = () => {
  const [feed, setFeed] = useState(false);
  const getFeed = async () => {
    try {
      const res = await axios.get(
        "https://api.instagram.com/v1/users/self/media/recent/?access_token=21253163367.1677ed0.16e4941ab2f04e6da1697bf6775f58ee"
      );
      console.log(res);
      console.log(res.data);
      setFeed(res.data.data);
      console.log("Here0");
    } catch (error) {
      if (error.response) {
        console.log("Here1");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log("Here2");
        console.log(error.request);
      } else {
        console.log("Here3");
        console.log("Error", error.message);
      }
      console.log("Here4");
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
