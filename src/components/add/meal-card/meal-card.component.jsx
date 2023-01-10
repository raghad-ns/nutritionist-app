import { Image } from 'phosphor-react'
import React from 'react'
import './meal-card.css'

const MealCard = (props) => {
    return (
        <div className='mealCard'>
            <div className="imageWrapper">
                {/* <img src={props.image} alt={props.name} /> */}
                <Image />
            </div>
            <div className='mealDetails'>
                <span>amount : {props.amount}</span>
                <span>calories : {props.calories}</span>
            </div>
        </div>
    )
}

export default MealCard