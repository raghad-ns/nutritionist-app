import React from 'react'
import './tabs.css'
import { DAYS } from '../../../data/days'
import Tab from '../../common/tab/tab.component'

const Tabs = () => {
    return (
        <div className="tabs">
            {DAYS.map((day, index) => <Tab day={day} key={index} />)}
        </div>
    )
}

export default Tabs