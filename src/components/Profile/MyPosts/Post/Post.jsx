import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://i.pinimg.com/736x/b1/cc/99/b1cc9987043f82eda1963ab8ba5d03c5.jpg' />
      {props.message}
      <div>
        <span>like  </span>
        <span>{props.count_like}likes</span>
      </div>
    </div>
  );
}

export default Post;