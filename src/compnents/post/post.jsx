import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://c8.alamy.com/comp/2DAW2TH/react-js-inscription-against-laptop-and-code-background-learn-react-programming-language-computer-courses-training-2DAW2TH.jpg"
        alt=""
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCats">Music</span>
          <span className="postCats">Life</span>
        </div>

        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour later</span>
      </div>
      <p className="postDescription">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus modi
        rerum quas voluptatum est ex delectus quaerat quos repellat ipsa
        assumenda dolorem velit, incidunt pariatur illo sunt ut, consequuntur
        corrupti!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Doloribus modi rerum quas voluptatum est ex delectus quaerat quos
        repellat ipsa assumenda dolorem velit, incidunt pariatur illo sunt ut,
        consequuntur corrupti!Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Doloribus modi rerum quas voluptatum est ex delectus
        quaerat quos repellat ipsa assumenda dolorem velit, incidunt pariatur
        illo sunt ut, consequuntur corrupti!Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Doloribus modi rerum quas voluptatum est
        ex delectus quaerat quos repellat ipsa assumenda dolorem velit, incidunt
        pariatur illo sunt ut, consequuntur corrupti!Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Doloribus modi rerum quas voluptatum est
        ex delectus quaerat quos repellat ipsa assumenda dolorem velit, incidunt
        pariatur illo sunt ut, consequuntur corrupti!Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Doloribus modi rerum quas voluptatum est
        ex delectus quaerat quos repellat ipsa assumenda dolorem velit, incidunt
        pariatur illo sunt ut, consequuntur corrupti!Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Doloribus modi rerum quas voluptatum est
        ex delectus quaerat quos repellat ipsa assumenda dolorem velit, incidunt
        pariatur illo sunt ut, consequuntur corrupti!Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Doloribus modi rerum quas voluptatum est
        ex delectus quaerat quos repellat ipsa assumenda dolorem velit, incidunt
        pariatur illo sunt ut, consequuntur corrupti!
      </p>
    </div>
  );
}

export default Post;
