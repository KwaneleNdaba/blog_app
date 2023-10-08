import React, { useContext } from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';

function Topbar() {
  const {user, dispatch} = useContext(Context);

  
  const PF =  "https://blog-olea.onrender.com/uploads/"
const handleLogOut = () =>{
 
  dispatch({type: "LOGOUT"})

}

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
<li onClick={handleLogOut}  className='topListItem'><Link to= "/login"  className='link'>
{user &&  "Logout" }
</Link></li>
    </ul>



     </div>
     <div className="topRight">

      {
        user ? (     <Link to = "/settings">   <img className = "topImage" src={PF+user.profilePicture} alt = "profile" /></Link>
        ) : (<ul className='topList'>
          <li className= "topListItem">
          <Link  className = "link" to = "/login">Login</Link>

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
