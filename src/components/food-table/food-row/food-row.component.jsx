import React from 'react'
import './food-row.css'
import { PencilSimple , TrashSimple } from 'phosphor-react'

const FoodRow = (props) => {
    return (
        <tr className='foodRow'>
            <td>{props.data.name}</td>
            <td> <img src={props.data.image} alt={props.data.name} /></td>
            <td>{props.data.amount}</td>
            <td>{props.data.calories}</td>
            <td>
                <div className="action">
                    <button>
                        <PencilSimple size={25} />
                    </button>
                    <button>
                    <TrashSimple size={25} />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default FoodRow