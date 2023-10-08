import React, { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from '../context/context';
function Write() {

  const [title , setTitle] = useState("")
  const [description , setDescription] = useState("")
  const [file , setFile] = useState(null)
  const {user} = useContext(Context);


  const handleSubmit = async (e) => {
    e.preventDefault()
 
    const newPost = {
      username : user.username,
      title : title,
      description: description
    }
    if(file){
      const data = new FormData();
    const filename= Date.now() + file.name
    data.append("name" ,filename) 
    data.append("file" ,file) 
    newPost.photo = filename


    try {
      await axios.post("https://blog-olea.onrender.com/api/upload", data)

    } catch (error) {
      
    }
    }
    try {
      const res = await axios.post("https://blog-olea.onrender.com/api/posts", newPost)
   
       window.location.replace("/post/" + res.data._id)
  
     } catch (error) {
       
     }

  }

  return (
    <div className="write">
           {
            file &&  <img
            className="writeImg"
            src={URL.createObjectURL(file)}
            alt=" "
          />
           }
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="fa-solid fa-plus writeIcon"></i>
          </label>
          <input onChange={(e) => setFile(e.target.files[0])} type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="writeFormGroup">
          <textarea
           onChange={(e) => setDescription(e.target.value)} 
            placeholder="tell your story"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button style={{cursor:"pointer"}} onClick = {handleSubmit} className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
