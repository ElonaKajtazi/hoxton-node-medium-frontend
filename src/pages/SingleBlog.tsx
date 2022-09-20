import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogType } from "../App";

export function SingleBlog({}) {
  const [singleBlog, setSingleBlog] = useState<null | BlogType>(null);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/blogs/${params.id}`)
      .then((res) => res.json())
      .then((blogFromServer) => setSingleBlog(blogFromServer));
  }, []);
  if (singleBlog === null) return <h1>Loadingg</h1>;
  return (
    <>
      <div className="author">
        <img className="avatar" src={singleBlog.author.avatar} alt="" />
        <p className="author-name">{singleBlog.author.userName}</p>
      </div>
      <article className="article-page">
        <h1>{singleBlog.blogTitle}</h1>
        <img className="article-image" src={singleBlog.imageUrl} alt="" />
        <p>{singleBlog.blogText}</p>
        {/* <div className="comments">
          {singleBlog.comments.map(comment => 
                 <div className="author">
                 <img className="avatar" src={} alt="" />
                 <p className="author-name">{singleBlog.author.userName}</p>
               </div>
               )}
   
        </div> */}
      </article>

    </>
  );
}
