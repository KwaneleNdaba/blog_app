import React, { useEffect, useState } from "react";
import "./sidebar.css";
import myself from "../image/myself.jpeg"
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Sidebar() {

const [categories, setCategories] = useState([]);



useEffect(() => {

  const getCategories = async () => {
    const categories = await axios.get("https://blog-olea.onrender.com/api/categories")
    setCategories(categories.data) 
  }
  getCategories()

}, [])


  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          style={{ width: "80%", height: "200px", display: "block" , borderRadius: "50%"}}
          src={myself}
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab non
          deleniti, soluta cum beatae dolorem odit sit repellat pariatur aut eum
          sequi atque mollitia asperiores at. Neque, molestias tempora?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
    {categories.length > 0 &&      categories.map((c, index) => {
          return   <Link className = "link" to = {`/?cat=${c.name}`}><li key = {index} className="sidebarListItem">{c.name}</li></Link>
         })}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon debarSocial fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
