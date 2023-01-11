import { Plus } from 'phosphor-react';
import MealCard from '../meal-card/meal-card.component';
import './daily-meals.css'

/**
 * 
 * @param {
 * meals : Array <{
 * id : number;
 * name : String;
 * image : String;
 * amount : number;
 * calories : number;}> ;
 * setMeals : void;
 * } props 
 */
const DailyMeals = (props) => {
    let calories = 0;
    props.meals.forEach(meal =>
        calories = calories + Number(meal.calories)
    );
    return (
        <div className="dailyMealsWrapper">
            <div className='dailyMeals'>
                <div className="mealsHeader">
                    <button className='innerButton' type='button' onClick={() => props.setAddMeal(true)}><Plus size={30} weight='bold' /></button>
                    <div className="stats">
                        <span>total calories per this day :</span>
                        <span>{calories} cal</span>
                    </div>
                </div>
                <div className="mealsWrapper">
                    {props.meals.map((meal, index) =>
                        <MealCard {...meal} key={index} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default DailyMeals