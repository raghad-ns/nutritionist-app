import React, { useState } from 'react'
import './add.css'
import PatientInfo from '../../components/add/patient-info/patient-info.component'
import Tabs from '../../components/add/tabs/tabs.component'
import DailyMeals from '../../components/add/daily-meals/daily-meals.component'
import AddMeal from '../../components/add/add-meal/add-meal.component'

const Add = () => {
    const [addMeal , setAddmeal] = useState(false) ;
    return (
        <div className='add'>
            {addMeal && <AddMeal setAddMeal = {setAddmeal}/>}
            <div className="addActionButtons">
                <button className='innerButton'> cancel</button>
                <button className='innerButton'> save</button>
            </div>
            <PatientInfo />
            <Tabs/>
            <DailyMeals setAddMeal = {setAddmeal} />
        </div>
    )
}

export default Add