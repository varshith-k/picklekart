import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='login'>
        <Link to='/'>
        <img className='login_logo' src='\images\jarlogo.svg' alt=''/>
        </Link>
    </div>
  )
}

export default Login