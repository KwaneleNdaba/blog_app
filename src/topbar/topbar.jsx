import React from 'react'
import "./topbar.css"

function Topbar() {
  return (
    <div className='top'>
     <div className="topLeft"><i className="fa-brands fa-facebook"></i>
     <i className="fa-brands fa-twitter"></i>
     <i className="fa-brands fa-pinterest"></i>
     <i className="fa-brands fa-instagram"></i>
     </div>

     <div className="topCenter">
    <ul className="topList">
<li className='topListItem'>Home</li>
<li className='topListItem'>About</li>
<li className='topListItem'>Contact</li>
<li className='topListItem'>Write</li>
<li className='topListItem'>logout</li>
    </ul>



     </div>
     <div className="topRight">
        <img className = "topImage" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt = "profile" />
     
        <i className="fa-solid fa-magnifying-glass topSearchIcon"></i>
     </div>
  
    </div>
  )
}

export default Topbar
