import React from 'react'
import './add.css'
import PatientInfo from '../../components/add/patient-info/patient-info.component'
import Tabs from '../../components/add/tabs/tabs.component'
import DailyMeals from '../../components/add/daily-meals/daily-meals.component'

const Add = () => {
    return (
        <div className='add'>
            <div className="addActionButtons">
                <button className='innerButton'> cancel</button>
                <button className='innerButton'> save</button>
            </div>
            <PatientInfo />
            <Tabs/>
            <DailyMeals/>
        </div>
    )
}

export default Add