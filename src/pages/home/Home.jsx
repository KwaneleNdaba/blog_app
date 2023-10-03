import React from 'react'
import './home.css'
import Header from '../../compnents/header/Header'
import Sidebar from '../../compnents/sidebar/sidebar'
import Posts from '../../compnents/posts/Posts'

function Home() {
  return (
  <>
    <Header/>
      <div className='home'>
        <Posts/>
        <Sidebar/>
      </div>
  </>
  )
}

export default Home
