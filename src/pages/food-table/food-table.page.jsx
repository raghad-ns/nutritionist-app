import React, { useState } from 'react'
import { Plus } from 'phosphor-react'
import './food-table.css'
import FoodRow from '../../components/food-table/food-row/food-row.component'
import AddFood from '../../components/food-table/add-food/add-food.component'

const FoodTable = () => {
    
    const [add , setAdd] = useState(false);
    
    return (
        <div className='foodTable'>
            {add && <div className="addFoodWrapper"><AddFood setAdd = {setAdd}/></div>} 
            <div className={add? 'innerButtonWrapper blur' : 'innerButtonWrapper'} >
                <button className='innerButton' onClick={()=> setAdd(oldAdd => true)}>Add <Plus size={18} weight='bold' /></button>
            </div>
            <table cellSpacing={15} className={add? 'blur' : ''}>
                <thead>
                    <tr>
                        <th>food</th>
                        <th>image</th>
                        <th>amount</th>
                        <th>calories</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <FoodRow />
                    <FoodRow />
                    <FoodRow />
                    <FoodRow />
                </tbody>
            </table>
        </div>
    )
}

export default FoodTable