import { Plus } from 'phosphor-react';
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
                <div className="newMealButton">
                    <button className='innerButton' onClick={() => props.setAddMeal(true)}><Plus size={30} weight='bold' /></button>
                </div>
                <div className="mealsWrapper">
                    <div className="meals">
                        <span>meal1</span>
                        <span>meal2</span>
                        <span>meal2</span>
                    </div>
                    <div className="stats">
                        <span>total calories per this day :</span>
                        <span>500 cal</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DailyMeals