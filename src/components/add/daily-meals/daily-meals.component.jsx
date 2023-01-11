import { Plus } from 'phosphor-react';
import MealCard from '../meal-card/meal-card.component';
import './daily-meals.css'

/**
 * 
 * @param {setAddMeal : React.Dispatch<React.SetStateAction<boolean>>} props 
 * @returns 
 */
const DailyMeals = (props) => {

    return (
        <div className="dailyMealsWrapper">
            <div className='dailyMeals'>
                <div className="mealsHeader">
                    <button className='innerButton' onClick={() => props.setAddMeal(true)}><Plus size={30} weight='bold' /></button>
                    <div className="stats">
                        <span>total calories per this day :</span>
                        <span>500 cal</span>
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