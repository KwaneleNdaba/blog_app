import React from 'react'
import "./Posts.css"
import Post from '../post/post'
function Posts({posts}) {
  return (
    <div className='posts'>
   {posts.map( (p, index) => {
    return <Post key = {index} posts = {p}/>
   })}
    </div>
  )
}

export default Posts
