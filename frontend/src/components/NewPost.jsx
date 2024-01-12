/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../feature/post.slice";

const NewPost = () => {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      message,
      author: userId,
      //   créer un id provisoire en attendant retour de la mongoDB
      _id: Date.now(),
    };

    axios.post("http://localhost:5000/post/", data).then(() => {
      dispatch(createPost(data));
      //   getPost pour chercher id créée par mongodb
      dispatch(getPosts());
    });

    setMessage("");
  };

  return (
    <form className="new-post-container" onSubmit={(e) => handleForm(e)}>
      <textarea
        placeholder="Quoi de neuf"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default NewPost;
