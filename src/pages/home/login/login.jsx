import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form  className="loginForm">

<lable>Email</lable>
<input className='loginInput' type = 'email' placeholder='Enter your email address'/>
<lable>Password</lable>
<input className='loginInput' type = 'password' placeholder='Enter your email address'/>
<button className='loginButton'>Login</button>
</form>
<button className='registerButton'>          <Link className = "link" to = "/register" >Register</Link>
</button>
    </div>
  )
}

export default Login
