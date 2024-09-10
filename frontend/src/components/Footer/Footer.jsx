import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>CLB Tiếng Nhật FUJI BKHCM - 藤クラブ</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""></img>
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>FUJI</h2>
                <ul>
                    <li>Home</li>
                    <li>Members</li>
                    <li>Check</li>
                    <li>Chính sách quyền riêng tư</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>LIÊN LẠC VỚI CHÚNG TÔI</h2>
                <ul>
                    <li>+84 972-345-807</li>
                    <li>fujijapanesecorner@gmail.com</li>
                </ul>
            </div>            
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 Fuji.com - All Right Reserved
        </p>
    </div>
  )
}

export default Footer