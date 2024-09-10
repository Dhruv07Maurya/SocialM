import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import CreatePost from "./components/CreatePost";
import { PostContext } from "./Store/PostContext";

function App() {
  const [state, setState] = useState("Home");
  const [post, setpost] = useState([
    {
      title: "person data",
      desc: "the card title and make up the bulk of the card's content",
    },
    {
      title: "heheh data",
      desc: "lorem ispri jdjij oweoi the card title and make up the bulk of the card's content",
    },
    {
      title: "person data",
      desc: "the card title and make up the bulk of the card's content",
    },
  ]);

  return (
    <>
      <Navbar></Navbar>
      <div className="main">
        <Sidebar state={state} setState={setState}></Sidebar>
        <PostContext.Provider value={[]}>
          <div>
            {state === "Home" ? (
              <Card post={post} setpost={setpost} />
            ) : (
              <CreatePost post={post} setpost={setpost} />
            )}
          </div>
        </PostContext.Provider>
      </div>
    </>
  );
}

export default App;
