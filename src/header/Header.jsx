import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
<div className="div headerTitles">
<span className="headerTitlesSm">React & Node</span>
      <span className="headerTitlesLg">Blog</span>
</div>
<img className='headerImage' src = "https://images.unsplash.com/photo-1487035170094-b76fc43abdf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=500&q=60" alt = "image" />
    </div>
  )
}

export default Header
