import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = () => {

      const url = "http://localhost:4000";
      const [image, setImage]=useState(false);
      const [data, setData]=useState({
        name:"",
        description:"",
        price:"",
        category:""
      })

      const onChangeHandler =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
      }

        const onSubmitHandler = async(event) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append("name", data.name)
            formData.append("description", data.description)
            formData.append("price", Number(data.price))
            formData.append("category", data.category)
            formData.append("image", image)
            const response = await axios.post(`${url}/api/food/add`, formData);
            if (response.data.success){
              setData({
                name:"",
                description:"",
                price:"",
                category:"Ban Chủ nhiệm"
              })
              setImage(false)
              toast.success(response.data.message)
            }
            else{

            }
        }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
        </div>
        <div className="add-member-name flex-col">
          <p>Member Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
        </div>
        <div className="add-member-desc flex-col">
          <p>Member description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="10" placeholder='Type here'></textarea>
        </div>
        <div className="add-category-price" >
          <div className="add-category flex-col">
            <p>Member Department</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Ban Chủ nhiệm">Ban Chủ nhiệm</option>
              <option value="Ban Truyền thông">Ban Truyền thông</option>
              <option value="Ban Tổ chức sự kiện">Ban Tổ chức sự kiện</option>
              <option value="Ban Chuyên môn">Ban Chuyên môn</option>
            </select>
          </div>
          <div className="add-price flex-col">
          <p>Price(member point)</p>
          <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='Point' />
        </div>
        </div>
        <button type='submit' className='add-button'>ADD</button>
      </form>
    </div>
  )
}

export default Add 