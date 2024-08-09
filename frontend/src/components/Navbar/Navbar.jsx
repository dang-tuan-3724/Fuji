import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {
    const [menu, setMenu] = useState("Home")
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li className={menu==="Home"?"active":""}>Home</li>
            <li className={menu==="Member"?"active":""}>Member</li>
            <li className={menu==="Check"?"active":""}>Check</li>
            <li className={menu==="Chart"?"active":""}>Chart</li>
        </ul>
        <div className="navbar-right">
            <button className="nav-button">Login</button>
        </div>
    </div>
  )
}

export default Navbar