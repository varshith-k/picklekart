import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Login() {
  const navigate = useNavigate();
  // const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault()
    //firebase stuff
    auth
    .signInWithEmailAndPassword(email,password)
    .then( auth=>{
     navigate('/')
    })
    .catch(error => alert(error.message))
    
  }
  const register = e => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) => {
      console.log(auth);
      if(auth){
        navigate('/')
      }
    })
    .catch(error => alert(error.message))
  }
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
         <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
         <h5>Password</h5>
         <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
         <button type='submit' onClick={signIn} className='login_signIn'>Sign In</button>
     </form>
     <p>By signing in you are now a member of Picklekart fam!</p>

     <button onClick={register} className='login_registerButton'>Become a PickleKart'er</button>

 </div>
    </div>
    
  )
}

export default Login