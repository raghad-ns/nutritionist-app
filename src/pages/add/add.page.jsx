import React, { useState } from 'react'
import './add.css'
import PatientInfo from '../../components/add/patient-info/patient-info.component'
import Tabs from '../../components/add/tabs/tabs.component'
import DailyMeals from '../../components/add/daily-meals/daily-meals.component'
import AddMeal from '../../components/add/add-meal/add-meal.component'
import { useAddDietProgram } from '../../hooks/add-diet-program'

const Add = () => {
    
    const [selectedDay, setSelectedDay] = useState(0);
    const [addMeal, setAddmeal] = useState(false);
    const addProgram = useAddDietProgram();

    return (
        <form className='add' onSubmit={addProgram.handleAddProgram} action='/viewPrograms' onReset={addProgram.reset}>
            {addMeal &&
                <AddMeal
                    setAddMeal={setAddmeal}
                    mealsPerDay={addProgram.meals.mealsPerDay}
                    setMealsPerDay={addProgram.meals.setMealsPerDay}
                    selectedDay={selectedDay}
                />}
            <div className="addActionButtons">
                <button className='innerButton' type='reset'> cancel</button>
                <button className='innerButton' type='submit'> save</button>
            </div>
            <PatientInfo />
            <Tabs selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
            <DailyMeals setAddMeal={setAddmeal} meals={addProgram.meals.mealsPerDay[selectedDay]} />
        </form>
    )
}

export default Add