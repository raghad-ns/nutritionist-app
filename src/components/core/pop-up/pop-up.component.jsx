import React from 'react'
import './pop-up.css'

/**
 * 
 * @param {children : React.reactNodes} props 
 * @returns 
 */
const PopUp = (props) => {
  return (
    <div className="popUpWrapper blur">
      {/* <div className="blur"></  div> */}
      <div className='popUp'>
        {props.children}
      </div>
    </div>
  )
}

export default PopUp