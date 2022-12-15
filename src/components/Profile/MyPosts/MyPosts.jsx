import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', count_like: '3' },
    { id: 2, message: "It's my first post", count_like: '6' },
  ]

  let postsElements = posts.map(p => <Post message={p.message} count_like={p.count_like} />);

  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;