import React from 'react'
import './tabs.css'
import { DAYS } from '../../../data/days'
import Tab from '../../common/tab/tab.component'

/**
 * 
 * @param {{
 * selectedDay : number ;
 * setSelectedDay : void;
 * }} props 
 * @returns 
 */
const Tabs = (props) => {
    return (
        <div className="tabs">
            {DAYS.map((day, index) =>
                <Tab
                    day={day}
                    key={index}
                    checked={props.selectedDay === index}
                    index={index}
                    setSelectedDay={props.setSelectedDay}
                />)}
        </div>
    )
}

export default Tabs