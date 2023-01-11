import React from 'react'
import './not-found.css'
import notFound from '../../assets/not-found.webp'

const NotFound = () => {
  return (
    <div className='notFound'>
      <img src={notFound} alt="not found" />
      <span>Opss , this page is not found!  </span>
      <span>press the home button in the upper right corner to return to the home page </span>
    </div>
  )
}

export default NotFound