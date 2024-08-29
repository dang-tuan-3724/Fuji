import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("Home")
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <Link to='./' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-member' onClick={()=>setMenu("Member")} className={menu==="Member"?"active":""}>Member</a>
            <a href='#' onClick={()=>setMenu("Check")} className={menu==="Check"?"active":""}>Check</a>
            <a href='#' onClick={()=>setMenu("Chart")} className={menu==="Chart"?"active":""}>Chart</a>
        </ul>
        <div className="navbar-right">
            <button className="nav-button" onClick={()=>setShowLogin(true)}>Login</button>
        </div>
    </div>
  )
}

export default Navbar