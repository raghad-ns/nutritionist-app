import React from 'react'
import './tab.css'

/**
 * 
 * @param {{
 * day : String;
 * key : Number;
 * }} props 
 * @returns 
 */
const Tab = (props) => {
    return (
        <label className="tab">
            <input type="radio" name="tab-input" className="tab-input" />
            <div className="tab-box">{props.day}</div>
        </label>
    )
}

export default Tab