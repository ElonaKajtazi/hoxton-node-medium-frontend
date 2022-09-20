import { useState } from "react";
import { Link } from "react-router-dom";
import { BlogType } from "../App";
type Props = {
  blogs: BlogType[];
};
export function MainPage({ blogs }: Props) {
  if (blogs.length === 0) return <h1>Loading....</h1>;
  return (
    <>
      <h1>Medium</h1>
      <Link to={"/singleBlog"}>
        <main>
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <article className="article">
                <div className="text">
                  <div className="author">
                    {" "}
                    <img className="avatar" src={blog.author.avatar} alt="" />
                    <h2 className=" author-name">{blog.author.userName}</h2>
                  </div>
                  <div className="blog-stuff">
                    {/* ${title.slice(0, 21)}...` */}
                    <h3>{blog.blogTitle}</h3>
                    <p className="blog-text">{`${blog.blogText.slice(
                      0,
                      100
                    )}...`}</p>
                  </div>
                </div>
                <div className="image">
                  <img className="blog-image" src={blog.imageUrl} alt="" />
                </div>
              </article>
            </Link>
          ))}
        </main>
      </Link>
    </>
  );
}
