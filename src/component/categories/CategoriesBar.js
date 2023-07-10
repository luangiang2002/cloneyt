import React, { useState } from 'react'
import './categoriesBar.scss'

  const keyword=[
    'All',
    'React js',
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
    const handleClick=(value)=>{
      setActiveElement(value)
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