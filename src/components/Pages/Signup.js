
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Signin.css'
import axios, { Axios } from 'axios'


const Signup = () => {
    const[email,setEmail]=useState();
    const[name,setName]=useState();
    const[password,setPassword]=useState();
 const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('',{email,name,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
 }
  return (
    <div className='sgn'>
    <div class="form-wrapper">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
            <div class="form-control">
                <input type="email" autocomplete="off" onChange={(e)=>setEmail(e.target.value)}/>
                <label>Email</label>
            </div>
            <div class="form-control">
            <input type="text" autocomplete="off" onChange={(e)=>setName(e.target.value)} />            
               <label>Username</label>
            </div>
            <div class="form-control">
            <input type="Password" autocomplete="off" onChange={(e)=>setPassword(e.target.value)} />            
                <label>Password</label>
            </div>
            <button type="submit">Sign Up</button>
            <div class="form-help"> 
                <div class="remember-me">
                    <input type="checkbox" id="remember-me"/>
                    <label for="remember-me">Remember me</label>
                </div>
               
            </div>
        </form>
        <p>Already had an account? <NavLink
          
          to="/Signin"
          style={{color:'blue'}}
         
        >
         Sign In Now
        </NavLink></p>
        
    </div>
    </div>
  )
}

export default Signup
