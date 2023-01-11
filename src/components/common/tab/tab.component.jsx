import React from 'react'
import './tab.css'

/**
 * 
 * @param {{
 * day : String;
 * index : Number;
 * checked : boolean;
 * setSelectedDay : void;
 * }} props 
 * @returns 
 */
const Tab = (props) => {
    return (
        <label className="tab">
            <input
                type="radio"
                name="tab-input"
                className="tab-input"
                value={props.day}
                checked={props.checked}
                onChange={() => props.setSelectedDay(props.index)}
            />
            <div className="tab-box">{props.day}</div>
        </label>
    )
}

export default Tab