/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const LikePost = ({ post }) => {
  const [userLiked, setUserLiked] = useState(false);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    if (post.likers) {
      if (post.likers.includes(userId)) {
        setUserLiked(true);
      } else {
        setUserLiked(false);
      }
      console.log(userLiked);
    }
  }, [userId]);

  const likePost = () => {
    axios.patch("http://localhost:5000/post/like-post/" + post._id, { userId });
    setUserLiked(true);
  };
  const dislikePost = () => {
    axios.patch("http://localhost:5000/post/dislike-post/" + post._id, {
      userId,
    });
    setUserLiked(false);
  };
  return (
    <div className="like-icon">
      <p>{post.likers ? post.likers.length : 0}</p>
      {userLiked ? (
        <span id="like-btn" onClick={() => dislikePost()}>
          &#9829;
        </span>
      ) : (
        <span id="dislike-btn" onClick={() => likePost()}>
          &#9829;
        </span>
      )}
    </div>
  );
};

export default LikePost;
