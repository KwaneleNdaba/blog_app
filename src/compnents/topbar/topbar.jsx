import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom';

function Topbar() {
const user = false;

  return (
    <div className='top'>
     <div className="topLeft"><i className="fa-brands fa-facebook"></i>
     <i className="fa-brands fa-twitter"></i>
     <i className="fa-brands fa-pinterest"></i>
     <i className="fa-brands fa-instagram"></i>
     </div>

     <div className="topCenter">
    <ul className="topList">
<li className='topListItem'><Link to= "/"  className='link'>
Home
</Link></li>
<li className='topListItem'><Link to= "/"  className='link'>
About
</Link></li>
<li className='topListItem'><Link to= "/"  className='link'>
Contact
</Link></li>
<li className='topListItem'><Link to= "/write-blog"  className='link'>
Write
</Link></li>
<li className='topListItem'><Link to= "/"  className='link'>
{user &&  "Logout" }
</Link></li>
    </ul>



     </div>
     <div className="topRight">

      {
        user ? (        <img className = "topImage" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt = "profile" />
        ) : (<ul className='topList'>
          <li className= "topListItem">
          <Link className = "link" to = "/login">Login</Link>

          </li>
          <li className= "topListItem">
          <Link className = "link" to = "/register" >Register</Link>

          </li>
        </ul>)
      }
     
        <i className="fa-solid fa-magnifying-glass topSearchIcon"></i>
     </div>
  
    </div>
  )
}

export default Topbar
