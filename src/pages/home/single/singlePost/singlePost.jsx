import React, { useEffect, useState } from "react";
import "./singlePost.css";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
function SinglePost() {

  const location = useLocation()
const path = (location.pathname.split("/")[2])//taking the section string or value in the location string 
const [post ,setPost] = useState("");

useEffect(() => {

  const getPost = async () => {
    const res = await axios.get("https://blog-olea.onrender.com/api/posts/" + path);
    setPost(res.data)
  }
  getPost();
}, [])


return (
    <div className="singlePost">
      {post !== "" && (
        <div className="singlePostWrapper">
        {post.photo == "" && (
             <img
             className="postImg"
             src={post.photo}
             alt=""
           />
        )}
          <h1 className="singlePostTitle">
  {
    post.title
  }          <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
              <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singleAuthor">
              <Link className = "link" to = {`/?user=${post.username}`}>Author : <b>{post.username}</b></Link>
            </span>
            <span className="singleDate">{new Date(post.createdAt).toDateString() }</span>
          </div>
          <p className="singlePostDescription">
          {post.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default SinglePost;
