import React, { useEffect, useState } from 'react'
import './add.css'
import PatientInfo from '../../components/add/patient-info/patient-info.component'
import Tabs from '../../components/add/tabs/tabs.component'
import DailyMeals from '../../components/add/daily-meals/daily-meals.component'
import AddMeal from '../../components/add/add-meal/add-meal.component'

const Add = () => {
    const [addMeal , setAddmeal] = useState(false) ;
    const food =  JSON.parse (localStorage.getItem('food') ||'[]');
    const mealsPerDay = [
        [food[0] , food[1]] ,
        [food[1] , food[2]] ,
        [food[2] , food[3]] ,
        [food[0] , food[3]] ,
        [food[0] , food[2]] ,
        [food[1] , food[3]] ,
        [food[2] , food[3]] ,
    ];
    const [selectedDay , setSelectedDay] = useState(0) ;
    useEffect (() => {
        console.log(selectedDay);
    } , [selectedDay])

    return (
        <div className='add'>
            {addMeal && <AddMeal setAddMeal = {setAddmeal}/>}
            <div className="addActionButtons">
                <button className='innerButton' type='reset'> cancel</button>
                <button className='innerButton' type='submit'> save</button>
            </div>
            <PatientInfo />
            <Tabs selectedDay = {selectedDay} setSelectedDay = {setSelectedDay}/>
            <DailyMeals setAddMeal = {setAddmeal} meals = {mealsPerDay[selectedDay]}/>
        </div>
    )
}

export default Add