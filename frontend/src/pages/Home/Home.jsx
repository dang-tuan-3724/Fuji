import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMember from '../../components/ExploreMember/ExploreMember'
import FoodDisplay from '../../components/MemDisplay/FoodDisplay'

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
    <Header/>
    <ExploreMember category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    </div>
  )
}

export default Home