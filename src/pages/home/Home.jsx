import React, { useEffect, useState } from 'react'
import './home.css'
import Header from '../../compnents/header/Header'
import Sidebar from '../../compnents/sidebar/sidebar'
import Posts from '../../compnents/posts/Posts'
import axios from 'axios'
import { useLocation } from 'react-router'

function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation()


    useEffect(() => {
      const fetchPost = async () => {
        const res = await axios.get("https://blog-olea.onrender.com/api/posts"+search);
       setPosts(res.data);
      }
      fetchPost();
    }, [search])
    
  return (
  <>
    <Header/>
      <div className='home'>
        <Posts posts = {posts}/>
        <Sidebar/>
      </div>
  </>
  )
}

export default Home
