import React from "react";
import "./singlePost.css";
function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://e0.pxfuel.com/wallpapers/767/95/desktop-wallpaper-software-developer-react-js.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singleAuthor">
            Auth : <b>Kwanele</b>
          </span>
          <span className="singleDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          quibusdam expedita et repudiandae quam labore suscipit. Sequi sapiente
          cupiditate impedit odit perferendis, quis illum amet iusto nisi ipsum
          cumque dolorem.Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Consectetur quibusdam expedita et repudiandae quam labore
          suscipit. Sequi sapiente cupiditate impedit odit perferendis, quis
          illum amet iusto nisi ipsum cumque dolorem.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          quibusdam expedita et repudiandae quam labore suscipit. Sequi sapiente
          cupiditate impedit odit perferendis, quis illum amet iusto nisi ipsum
          cumque dolorem.Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Consectetur quibusdam expedita et repudiandae quam labore
          suscipit. Sequi sapiente cupiditate impedit odit perferendis, quis
          illum amet iusto nisi ipsum cumque dolorem.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
