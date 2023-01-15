import { Image } from 'phosphor-react'
import React from 'react'
import './meal-card.css'

/**
 * 
 * @param {{
 * name : string; 
 * image : string ;
 * calories : number ;
 * amount : number ;
 * }} props 
 * @returns 
 */
const MealCard = (props) => {
    return (
        <div className='mealCard'>
            <div className="imageWrapper">
                {props.image
                    ? <img src={props.image} alt={props.name} />
                    : <Image />
                }
            </div>
            <div className='mealDetails'>
                <span>food : {props.name}</span>
                <span>amount : {props.amount}</span>
                <span>calories : {props.calories}</span>
            </div>
        </div>
    )
}

export default MealCard