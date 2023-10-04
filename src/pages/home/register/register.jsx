import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form  className="registerForm">

      <lable>Username</lable>
<input className='registerInput' type = 'text' placeholder='Enter your username'/>

<lable>Email</lable>
<input className='registerInput' type = 'email' placeholder='Enter your email address'/>
<lable>Password</lable>
<input className='registerInput' type = 'password' placeholder='Enter your email address'/>

<button className='loginButton'>Register</button>

</form>
<button className='registerButton'>          <Link className = "link" to = "/login">Login</Link>
</button>

    </div>
  )
}

export default Register
