import React, {useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  return (
    <div className='login'>
        <div className='login_bar'>
        <Link to='/'>
        <img className='login_logo' src='\images\jarlogo.svg' alt=''/>
        </Link>
        </div>
        <div className='login_container'>
     <h1>Sign In</h1>
     <form>
         <h5>E-mail</h5>
         <input type='text'></input>
         <h5>Password</h5>
         <input type='password'></input>
         <button>Sign In</button>
     </form>
     <p>By signing in you are now a member of Picklekart fam!</p>

     <button className='login_registerButton'>Become a PickleKart'er</button>

 </div>
    </div>
    
  )
}

export default Login