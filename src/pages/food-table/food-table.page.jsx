import React from 'react'
import { Plus } from 'phosphor-react'
import './food-table.css'
import FoodRow from '../../components/food-table/food-row/food-row.component'

const FoodTable = () => {
    
    return (
        <div className='foodTable'>
            <div className='innerButtonWrapper'>
                <button className='innerButton'>Add <Plus size={18} weight='bold' /></button>
            </div>
            <table cellSpacing={15}>
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