
import React from 'react'
import '../Styles/Signin.css'
import { NavLink } from 'react-router-dom'
const Signin = () => {
  return (
    <div className='sgn'>
    <div class="form-wrapper">
        <h2>Sign In</h2>
        <form action="#">
            <div class="form-control">
                <input type="email" required/>
                <label>Email </label>
            </div>
            <div class="form-control">
                <input type="password" required/>
                <label>Password</label>
            </div>
            <button type="submit">Sign In</button>
            <div class="form-help"> 
                <div class="remember-me">
                    <input type="checkbox" id="remember-me"/>
                    <label for="remember-me">Remember me</label>
                </div>
              
            </div>
        </form>
        <p>Register?<NavLink
          
                to="/Signup"
                
                style={{color:'blue'}}
              >
               Sign Up Now
              </NavLink></p>
        
    </div>
    </div>
   
  )
}

export default Signin
