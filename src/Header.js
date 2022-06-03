import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
  // eslint-disable-next-line
  const [{basket, user},dispatch] = useStateValue();
  const handleAuthentication = () =>{
     if(user){
       auth.signOut();
     }
  }
  return (
    <div className='header'>
      <Link to='/'>
        <img 
        className='header_logo' 
        src='/images/jarlogo.svg'
        alt='Picklekart-Logo'></img>
        </Link>
        <div
        className='header_search'>
            <input className='header_input' type="text"/>
            <SearchIcon className='header_icon'/>
        </div>
        <div 
        className='header_nav'>
          <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className='header_option'>
                 <span className='header_optionLineOne'>Hello {!user?'Guest':user?.email}</span>
                 <span className='header_optionLineTwo'>{user ?'Sign Out':'Sign In'}</span>
            </div>
            </Link>
            <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
                 <span className='header_optionLineTwo'>& Orders</span>
            </div>
            <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
                 <span className='header_optionLineTwo'>Kart</span>
            </div>
            <Link to='/checkout'>
            <div className='header_optionBasket'>
            <ShoppingBasketIcon/>
            <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
} 

export default Header