import React, { useRef } from "react";

function CreatePost({ post, setpost }) {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const recval = () => {
    var a = inputRef.current.value;
    var b = inputRef2.current.value;
    if (a !== "" && b !== "") {
      setpost([
        ...post,
        { title: inputRef.current.value, desc: inputRef2.current.value },
      ]);
    }
    inputRef.current.value = "";
    inputRef2.current.value = "";
  };

  return (
    <div className="post">
      <div class="mb-3">
        <label htmlFor="exampleFormControlInput1" class="form-label">
          Post Title
        </label>
        <input
          ref={inputRef}
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Title"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="exampleFormControlTextarea1" class="form-label">
          Post Description
        </label>
        <textarea
          ref={inputRef2}
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button onClick={recval} className="btn btn-primary btn">
          Add Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
