import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Register() {

  const [username , setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [error,setError] = useState()

  const register = async (e) => {
    const registerUser = await axios.post("https://blog-olea.onrender.com/api/auth/register", {
      username,email,password, 
    })

  try {
    setError(false)
    if(registerUser.status === 200){
      alert("Registered successfully")
      window.location.replace("/login")
    }
  } catch (error) {
    setError(true)
    if(registerUser.status === 500){
      alert("User already registered")
    }

  }

  
  }


  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form  className="registerForm">

      <lable>Username</lable>
<input onChange = {(e) => setUsername(e.target.value)} className='registerInput' type = 'text' placeholder='Enter your username'/>

<lable>Email</lable>
<input onChange = {(e) => setEmail(e.target.value)} className='registerInput' type = 'email' placeholder='Enter your email address'/>
<lable>Password</lable>
<input onChange = {(e) => setPassword(e.target.value)} className='registerInput' type = 'password' placeholder='Enter your email address'/>

<button className='loginButton' onClick={(e) => {
  register()
  
  e.preventDefault();
}}>Register</button>

</form>
<button className='registerButton' >          <Link className = "link" to = "/login">Login</Link>
</button>
<span style={{color : "tomato",marginTop:"5px"}}>{error && "something went wrong"}</span>
    </div>
  )
}

export default Register
