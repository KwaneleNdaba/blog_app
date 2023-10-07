import React, { useContext, useRef, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Context } from '../../../context/context';
function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const userRef = useRef();
  const passwordRef = useRef();

  const {user, dispatch , isFetching } = useContext(Context)
  
  const handleSubmit =  async (e) => {
    console.log(email, password)
    e.preventDefault()

  dispatch({type: "LOGIN_START"})

  try {

    const res =  await axios.post("https://blog-olea.onrender.com/api/auth/login", {
      email: email,
      password : password
    })



    if(res){
      dispatch({type: "LOGIN_SUCCESS", payload : res.data})
    }
    
  } catch (error) {
    dispatch({type: "LOGIN_FAILURE"})

  }

  }

  console.log(isFetching)

  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form onSubmit={handleSubmit}  className="loginForm">

<lable>username</lable>
<input className='loginInput'  value = {email} onChange = {(e) => setEmail(e.target.value)} type = 'email' placeholder='Enter your email address'/>
<lable>Password</lable>
<input value = {password} onChange = {(e) => setPassword(e.target.value)} className='loginInput' type = 'password' placeholder='Enter your email address'/>
<button onClick={handleSubmit} type= "submit"  className='loginButton'>Login</button>
</form>
<button className='registerButton'> <Link className = "link" to = "/register" >Register</Link>
</button>
    </div>
  )
}

export default Login
