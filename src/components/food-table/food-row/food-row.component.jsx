import React from 'react'
import './food-row.css'
import { Image, PencilSimple, TrashSimple } from 'phosphor-react'

/**
 * 
 * @param {{
 * data : {
 * id : number ;
 * name : string ;
 * image : string ; 
 * amount : number ;
 * calories : number}
 * setAction : void ;
 * setItemMayBeDeleted : void ;
 * setDeleteConfirmation : void ;
 * }} props 
 * @returns 
 */
const FoodRow = (props) => {

    const deleteFood = () => {
        props.setDeleteConfirmation(true)
        props.setItemMayBeDeleted(props.data.id)
    }

    return (
        <tr className='foodRow'>
            <td>{props.data.name}</td>
            <td> {
                props.data.image
                    ? <img src={props.data.image} alt={props.data.name} />
                    : <Image size={50} color='#444' />
            }</td>
            <td>{props.data.amount}</td>
            <td>{props.data.calories}</td>
            <td>
                <div className="action">
                    <button onClick={() => props.setAction({ type: 'edit', data: props.data })}>
                        <PencilSimple size={25} color='#eddd0e' />
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