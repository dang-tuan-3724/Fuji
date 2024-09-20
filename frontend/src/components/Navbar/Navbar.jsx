import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("Trang chủ");

    const {token, setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = ()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    }


  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <Link to='./' onClick={()=>setMenu("Trang chủ")} className={menu==="Trang chủ"?"active":""}>Trang chủ</Link>
            <a href='#explore-member' onClick={()=>setMenu("Thành viên")} className={menu==="Thành viên"?"active":""}>Thành viên</a>
            <a href='#' onClick={()=>setMenu("Check")} className={menu==="Check"?"active":""}>Check</a>
            <a href='#' onClick={()=>setMenu("Sự kiện sắp diễn ra")} className={menu==="Sự kiện sắp diễn ra"?"active":""}>Sự kiện sắp diễn ra</a>
        </ul>
        <div className="navbar-right">
            {!token?<button className="nav-button" onClick={()=>setShowLogin(true)}>Login</button>
            :<div className='navbar-profile' >
              <img src={assets.profile_icon} alt="" />
             <ul className="nav-profile-dropdown">
                  <li onClick={logout}><img src={assets.logout_icon} alt="" /> Logout</li>
             </ul>
            </div>
            }
            
        </div>
    </div>
  )
}

export default Navbar