import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import "./App.css";
import { MainPage } from "./pages/MainPage";
import { SingleBlog } from "./pages/SingleBlog";
// import
// import {MainPage} from "./pages/MainPage"
// import { MainPage } from "./pages/MainPage";
// import { SingleBlog } from "./pages/SingleBlog";
export type BlogType = {
  id: number;
  blogTitle: string;
  blogText: string;
  imageUrl: string;
  userId: number;
  author: {
    id: number;
    userName: string;
    avatar: string;
    email: string;
  };
  comments: {
    id: number;
    commentText: string;
    userId: number;
    blogId: number;
  }[];
};

function App() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  // const [currentBlog, setCurrentBlog] = useState(1);

  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then((res) => res.json())
      .then((blogsFromServer) => setBlogs(blogsFromServer));
  }, []);
  // if (!singleBlog) {
  //   return <h1>Not found</h1>;
  // } else {
  //   // return <h1>{currentBlog.blogTitle} </h1>
  //   console.log(singleBlog);
  // }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/main"
          element={
            <MainPage
              blogs={blogs}
              // setCurrentBlog={setCurrentBlog}
              // currentBlog={currentBlog}
            />
          }
        />
        <Route path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}

export default App;