import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Đăng kí")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="Đăng nhập"?<></>:<input type="text" placeholder='Tên của bạn' required />}
                <input type="email"  placeholder='Email của bạn' required/>
                <input type="password"  placeholder='Mật khẩu' required/>
            </div>
            <button>{currState==="Đăng kí"?"Tạo tài khoản":"Đăng nhập"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>Tôi đồng ý với các điều khoản sử dụng và chính sách quyền riêng tư.</p>
            </div>
            {currState==="Đăng nhập"
            ?<p>Bạn chưa có tài khoản? <span onClick={()=>setCurrState("Đăng kí") } >Đăng kí</span> </p>
            :<p>Bạn đã có tài khoản? <span onClick={()=>setCurrState("Đăng nhập") }>Đăng nhập</span> </p>
            }
        </form>
    </div>
  )
}

export default LoginPopup