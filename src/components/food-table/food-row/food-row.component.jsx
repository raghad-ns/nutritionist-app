import React from 'react'
import './food-row.css'

const FoodRow = (props) => {
    return (
        <tr className='foodRow'>
            <td>{props.data.name}</td>
            <td> <img src={props.data.image} alt={props.data.name} /></td>
            <td>{props.data.amount}</td>
            <td>{props.data.calories}</td>
            <td>action</td>
        </tr>
    )
}

export default FoodRow