import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
        <img 
        className='header_logo' 
        src='/images/jarlogo.svg'
        alt='Picklekart-Logo'></img>
        <div
        className='header_search'>
            <input className='header_input' type="text"/>
            <SearchIcon className='header_icon'/>
        </div>
        <div 
        className='header_nav'>
            <div className='header_option'>
                 <span className='header_optionLineOne'>Hello Guest</span>
                 <span className='header_optionLineTwe'>Sign In</span>
            </div>
            <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
                 <span className='header_optionLineTwe'>& Orders</span>
            </div>
            <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
                 <span className='header_optionLineTwe'>Kart</span>
            </div>
        </div>
    </div>
  )
}

export default Header