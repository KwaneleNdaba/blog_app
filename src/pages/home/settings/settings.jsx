import React, { useContext, useState } from "react";
import "./settings.css";
import Sidebar from "../../../compnents/sidebar/sidebar";
import { Context } from "../../../context/context";
import axios from "axios";
export default function Settings() {

  const [file, setFile]  = useState(null)
  const[username, setUsername] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
const [success, setSuccess] =useState(false)

  const {user , dispatch} = useContext(Context);


  
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type : "UPDATE_START"})
 
    const updatedUser = {
      userId : user._id,
      username,
      email,
      password
    }
    if(file){
      const data = new FormData();
    const filename= Date.now() + file.name
    data.append("name" ,filename) 
    data.append("file" ,file) 
    updatedUser.profilePicture = filename

    try {
      await axios.post("https://blog-olea.onrender.com/api/upload", data)
    
    } catch (error) {
      
    }
    }
    try {
    const res=  await axios.put("https://blog-olea.onrender.com/api/users/"+user._id, updatedUser)
      setSuccess(true)
      dispatch({type : "UPDATE_SUCCESS", payload : res.data})

     } catch (error) {
       console.log(error)
       dispatch({type : "UPDATE_FAILURE"})

     }

  }
  const PF =  "https://blog-olea.onrender.com/uploads/"
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdatetitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+ user.profilePicture}
              alt="profile"
            />
            <label htmlFor="fileInput">
              <i className="fa-solid fa-user settingsPPIcon"></i>
            </label>
            <input onChange={(e) => setFile(e.target.files[0])}   type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <lable>
            username
          </lable>
          <input onChange={(e) => setUsername(e.target.value)}  value = {username} type="text" placeholder={user.username} />
          <lable>
            email
          </lable>
          <input onChange={(e) => setEmail(e.target.value)}  value = {email}type="email" placeholder={user.email} />
          <lable>
            password
          </lable>
          <input onChange={(e) => setPassword(e.target.value)}  value = {password}  type="password"  />
          <button type = "submit" className="settingsSubmit">Update</button>
          {success && <span style ={{color: "green"}}>Profile has been updated...</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
