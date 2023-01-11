import React from 'react'
import './add-meal.css'
import PopUp from '../../core/pop-up/pop-up.component'
import Select from '../../common/select/select.component.jsx';
import Input from '../../common/input/input.component.jsx';
import { Image } from 'phosphor-react';

/**
 * 
 * @param {setAddMeal : React.Dispatch<React.SetStateAction<boolean>>} props 
 * @returns 
 */
const AddMeal = (props) => {
    const food = JSON.parse(localStorage.getItem('food') || '[]');
    return (
        <PopUp>
            <h2>Add meal</h2>
            <Select label='meal'>
                {food.map((meal, index) =>
                    <option value={meal.name} key={index}>{meal.name}</option>)}
            </Select>
            <Input type="number" label='amount (gm)' />
            <div className="preview">
                <Image size={70} color="#444" />
                <div className="mealCalories">
                    <span >total calories : </span>
                    <span>500 cal</span>
                </div>
            </div>
            <div className="actionButtons">
                <button className="innerButton" onClick={() => props.setAddMeal(false)}>add</button>
                <button className="innerButton" onClick={() => props.setAddMeal(false)}>cancel</button>
            </div>
        </PopUp>
    )
}

export default AddMeal