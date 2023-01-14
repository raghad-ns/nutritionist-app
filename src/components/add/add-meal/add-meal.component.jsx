import React, { useContext, useState } from 'react'
import './add-meal.css'
import PopUp from '../../core/pop-up/pop-up.component'
import Select from '../../common/select/select.component.jsx';
import Input from '../../common/input/input.component.jsx';
import { Image } from 'phosphor-react';
import { FoodContext } from '../../providers/food.provider';

/**
 * 
 * @param {{
 * mealsPerDay : Array <{
 * id : number;
 * name : String;
 * image : String;
 * amount : number;
 * calories : number;}> ;
 * setAddMeal : void;
 * setMealsPerDay : void;
 * selectedDay : number;
 * }} props 
 * @returns 
 */
const AddMeal = (props) => {
    const foodContext = useContext(FoodContext);
    const [meal, setMeal] = useState(null);
    const [calories, setCalories] = useState(0);
    const [amount, setAmount] = useState(0);
    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */
    const handleAddMeal = () => {
        const tempMeal = { ...meal, calories: calories, amount: amount };
        const tempMealsPerDay = props.mealsPerDay.map((dayMeal, index) =>
            props.selectedDay !== index ? dayMeal : [...dayMeal, tempMeal]
        );
        props.setMealsPerDay(tempMealsPerDay)
        props.setAddMeal(false)
    }
    return (
        <PopUp>
            <h2>Add meal</h2>
            <Select label='meal' name='meal'
                onChange={(e) =>
                    setMeal(foodContext.food.find(meal => meal.name === e.target.value))
                }>
                {foodContext.food.map((meal, index) =>
                    <option value={meal.name} key={index}>{meal.name}</option>)}
            </Select>
            <Input type="number" name='amount' label='amount (gm)' value={amount} onChange={e => {
                setAmount(e.target.value)
                setCalories(e.target.value * (meal.calories / meal.amount))
            }} />
            <div className="preview">
                {
                    meal
                        ? <img src={meal.image} alt="selected food" />
                        : <Image size={70} color="#444" />
                }
                <div className="mealCalories">
                    <span >total calories : </span>
                    <span>{calories} cal</span>
                </div>
            </div>
            <div className="actionButtons">
                <button className="innerButton" onClick={handleAddMeal}>add</button>
                <button className="innerButton" onClick={() => props.setAddMeal(false)}>cancel</button>
            </div>
        </PopUp>
    )
}

export default AddMeal