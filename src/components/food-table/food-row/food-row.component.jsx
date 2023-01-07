import React, { useContext } from 'react'
import './food-row.css'
import { PencilSimple, TrashSimple } from 'phosphor-react'
import { FoodContext } from '../../providers/food.provider'

const FoodRow = (props) => {
    const foodContext = useContext(FoodContext);
    const deleteFood = () => {
        foodContext.dispatch({ type: 'DELETE', id: props.data.id })
    }
    return (
        <tr className='foodRow'>
            <td>{props.data.name}</td>
            <td> <img src={props.data.image} alt={props.data.name} /></td>
            <td>{props.data.amount}</td>
            <td>{props.data.calories}</td>
            <td>
                <div className="action">
                    <button onClick={() => props.setAction ({type : 'edit' , data : props.data})}>
                        <PencilSimple size={25} color = '#eddd0e'/>
                    </button>
                    <button onClick={deleteFood} >
                        <TrashSimple size={25} color='red' />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default FoodRow