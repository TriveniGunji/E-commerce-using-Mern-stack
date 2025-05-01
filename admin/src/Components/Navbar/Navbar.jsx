import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import navProfile from '../../assets/nav-profile.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logoo'>
        <img className='nav-logo' src={navlogo} alt="" />
        <p className='nav-title'>
          SHOPPER <span>Admin Panel</span>
        </p>
      </div>
      <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
