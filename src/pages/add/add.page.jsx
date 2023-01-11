import React, { useEffect, useState } from 'react'
import './add.css'
import PatientInfo from '../../components/add/patient-info/patient-info.component'
import Tabs from '../../components/add/tabs/tabs.component'
import DailyMeals from '../../components/add/daily-meals/daily-meals.component'
import AddMeal from '../../components/add/add-meal/add-meal.component'

const Add = () => {
    const [addMeal, setAddmeal] = useState(false);
    const [programs, setPrograms] = useState(JSON.parse(localStorage.getItem('dietPrograms') || '[]'));
    const [mealsPerDay, setMealsPerDay] = useState([
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ]);

    const [selectedDay, setSelectedDay] = useState(0);
    useEffect(() => {
        console.log('programs', programs);
        localStorage.setItem('dietPrograms', JSON.stringify(programs));
    }, [programs])

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */
    const handleAddProgram = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const dob = e.target.dob.value;
        const city = e.target.city.value;
        const patientInfo = {
            name: name,
            phone: phone,
            email: email,
            dob: dob,
            city: city
        };
        console.log(patientInfo);
        setPrograms([...programs, { id: Date.now(), patientInfo: patientInfo, mealsPerDay: mealsPerDay }])
        reset(e);
    }

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */
    const reset = (e) => {
        console.log('reset');
        e.target.city.value = e.target.city.defaultSelected
        e.target.dob.value = null
        e.target.email.value = null
        e.target.phone.value = null
        e.target.name.value = null
        setMealsPerDay([
            [],
            [],
            [],
            [],
            [],
            [],
            [],
        ]);
    }

    return (
        <form className='add' onSubmit={handleAddProgram} action='/viewPrograms'>
            {addMeal && <AddMeal setAddMeal={setAddmeal} mealsPerDay={mealsPerDay} setMealsPerDay={setMealsPerDay} selectedDay={selectedDay} />}
            <div className="addActionButtons">
                <button className='innerButton' type='reset'> cancel</button>
                <button className='innerButton' type='submit'> save</button>
            </div>
            <PatientInfo />
            <Tabs selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
            <DailyMeals setAddMeal={setAddmeal} meals={mealsPerDay[selectedDay]} />
        </form>
    )
}

export default Add