import React from 'react'
import './home.css'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/sidebar'
import Posts from '../../posts/Posts'

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
