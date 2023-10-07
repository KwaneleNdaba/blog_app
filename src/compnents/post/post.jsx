import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

function Post({posts}) {
  return (
    <div className="post">
      {posts.photo == "" && (
           <img
           className="postImg"
           src={posts.photo}
           alt=""
         />
      )}

      <div className="postInfo">
        <div className="postCats">

{
  posts.categories.map((cat,index) => {
    return <span key = {index} className="postCats">{cat.name}</span>
  })
}
        
        </div>

        <Link className = "link" to = {`/post/${posts._id}`}>
        <span className="postTitle">{posts.title}</span>
        </Link>

      
        <hr />
        <span className="postDate">{new Date(posts.createdAt).toDateString() }</span>
      </div>
      <p className="postDescription">
        {posts.description}
      </p>
    </div>
  );
}

export default Post;
