/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/post.slice";

/* eslint-disable react/prop-types */
const Thread = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postsData);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <div className="thread-container">
        {posts &&
          posts
            .slice()
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .map((post) => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Thread;
