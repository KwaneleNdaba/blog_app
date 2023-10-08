import React, { useContext, useEffect, useState } from "react";
import "./singlePost.css";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../../../context/context";

function SinglePost() {

  const location = useLocation()
const path = (location.pathname.split("/")[2])//taking the section string or value in the location string 
const [post ,setPost] = useState("");
const {user} = useContext(Context);
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [update, setUpdate] = useState(false)


useEffect(() => {

  const getPost = async () => {
    const res = await axios.get("https://blog-olea.onrender.com/api/posts/" + path);
    setPost(res.data)
  }
  getPost();
}, [])


const PF =  "https://blog-olea.onrender.com/uploads/"

const handleDelete = async ()  => {
  try {
    await axios.delete("https://blog-olea.onrender.com/api/posts/" + path,{data: {username: user.username}}/*you to post data like this if the method is not post*/)
    window.location.replace("/")

  } catch (error) {
    console.log(error.message)
  }
}


const handleUpdate = async () =>{
  try {
    await axios.put("https://blog-olea.onrender.com/api/posts/" + path,{username: user.username, title, description}/*you to post data like this if the method is not post*/)
    window.location.reload()

  } catch (error) {
    console.log(error.message)
  }}

return (
    <div className="singlePost">
      {post !== "" && (
        <div className="singlePostWrapper">
     {
      post.photo !== "" && (
        <img
        className="postImg"
        src={PF + post.photo}
        alt=""
      />
      )
     }
{
  update ? <input className="titleInput" type = 'text' placeholder="title" onChange ={(e) => setTitle(e.target.value)} autoFocus={true} value = {title} /> :       <h1 className="singlePostTitle">
           
  {
    post.title
  }       
   {post.username == user?.username &&    <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square" onClick = {() => setUpdate(true)}></i>
              <i className="singlePostIcon fa-sharp fa-solid fa-trash" onClick = {handleDelete}></i>
            </div>}
          </h1>
}

    
          <div className="singlePostInfo">
            <span className="singleAuthor">
              <Link className = "link" to = {`/?user=${post.username}`}>Author : <b>{post.username}</b></Link>
            </span>
            <span className="singleDate">{new Date(post.createdAt).toDateString() }</span>
          </div>
          {
            update ? <textarea className="descInput" placeholder = "description..." onChange = {(e) => setDescription(e.target.value)}value = {description} /> :  <p className="singlePostDescription">
            {post.description}
            </p>
          }
      {
        update &&     <button className="singlePostUpdateBtn" onClick={handleUpdate}>update</button>
      }
        </div>
      )}
    </div>
  );
}

export default SinglePost;
