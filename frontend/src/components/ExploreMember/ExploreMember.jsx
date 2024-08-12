import React from 'react'
import './ExploreMember.css'
import { menu_list } from '../../assets/assets'


const ExploreMember = ({category, setCategory}) => {


  return (
    <div className='explore-member' id='explore-member'>
        <h1>Danh sách thành viên</h1>
        <p className="explore-member-text">Danh sách thành viên đang hoạt động tại câu lạc bộ</p>
        <div className="explore-member-list">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-member-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    <hr/>
    </div>
  )
}

export default ExploreMember