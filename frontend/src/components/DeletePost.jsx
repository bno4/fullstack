import axios from "axios";
import { useDispatch } from "react-redux";
import { deletePost } from "../feature/post.slice";

/* eslint-disable react/prop-types */
const DeletePost = ({ postId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    axios.delete("http://localhost:5000/post/" + postId);
    dispatch(deletePost(postId));
  };

  return (
    <span id="delete-btn" onClick={() => handleDelete()}>
      &#10010;
    </span>
  );
};

export default DeletePost;
