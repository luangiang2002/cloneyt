import React, { useState } from 'react'
import './categoriesBar.scss'
import { useDispatch } from 'react-redux'
import { getPopularVideo, getVideoByCategory } from '../../redux/action/video.action'

  const keyword=[
    'All',
    'Âm nhạc',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art',
    'Guitar',
    'Bengali Song',
    'Coding',
    'Cricket',
    'Football',
    'React Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
  ]
  const CategoriesBar = () => {

    const [activeElement,setActiveElement]=useState('All')
    const dispatch=useDispatch()

    const handleClick=(value)=>{
      setActiveElement(value)
      if(value==='All'){
        dispatch(getPopularVideo())
      }
      else{
        dispatch(getVideoByCategory(value))
      }
    }
  return (
    <div className="CategoriesBar">
      {
        keyword.map((value,i)=>(
          <span key={i}
          onClick={()=>handleClick(value) }
          className={activeElement===value?'active':''}
          >
          {value}
          </span>
        ))
      }
    </div>
  )
}

export default CategoriesBar