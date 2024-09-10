import React, { useContext } from "react";
import { PostContext } from "../Store/PostContext";

function Card({ post, setpost }) {
  const postctx = useContext(PostContext);
  console.log(postctx)

  function deletee(idx) {
    setpost(post.filter((_, index) => index != idx));
  }
  return post.map((itm, idx) => (
    <div key={idx}>
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{itm.title}</h5>
          <p class="card-text">{itm.desc}</p>
          <a onClick={(e) => deletee(idx)} href="#" class="btn btn-primary">
            Delete This Post
          </a>
        </div>
      </div>
    </div>
  ));
}

export default Card;
