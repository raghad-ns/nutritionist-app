import React, { useContext } from 'react'
import { DietProgramsContext } from '../../providers/diet-programs.provider'
import { FoodContext } from '../../providers/food.provider'
import PopUp from '../pop-up/pop-up.component'
import './delete-confirmation.css'

/**
 * 
 * @param {{
 * id : number ;
 * source : string ;
 * setDeleteConfirmation : void ;
 * }} props 
 * @returns 
 */
const DeleteConfirmation = (props) => {
    const foodContext = useContext(FoodContext);
    const dietProgramsContext = useContext(DietProgramsContext)
    const deleteSelected = () => {
        if (props.source === 'food') {
            foodContext.dispatch({ type: 'DELETE', id: props.id })
        }
        else if (props.source === 'dietPrograms') {
            console.log('deleting');
            dietProgramsContext.dispatch({ type: 'DELETE', id: props.id })
        }

        update()
    }
    const update = () => {
        props.setDeleteConfirmation(false)
    }
    return (
        <PopUp>
            <span>are you sure that you want to delete this item ?</span>
            <div className="deleteConfirmationButtons">
                <button className='innerButton'  onClick={deleteSelected}>Yes</button>
                <button className='innerButton' onClick={update}>No</button>
            </div>
        </PopUp>
    )
}

export default DeleteConfirmation
