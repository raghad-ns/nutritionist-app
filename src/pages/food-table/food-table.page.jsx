import React, { useContext, useState } from 'react'
import { Plus } from 'phosphor-react'
import './food-table.css'
import FoodRow from '../../components/food-table/food-row/food-row.component'
import AddFood from '../../components/food-table/add-food/add-food.component'
import { FoodContext } from '../../components/providers/food.provider'

const FoodTable = () => {

    const [add, setAdd] = useState(false);
    const foodContext = useContext(FoodContext);

    return (
        <div className='foodTable'>
            {add && <div className="addFoodWrapper"><AddFood setAdd={setAdd} /></div>}
            <div className={add ? 'innerButtonWrapper blur' : 'innerButtonWrapper'} >
                <button className='innerButton' onClick={() => setAdd(oldAdd => true)}>Add <Plus size={18} weight='bold' /></button>
            </div>
            <table cellSpacing={15} className={add ? 'blur' : ''}>
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
                    {foodContext.food.map((foodItem, index) =>
                        <FoodRow key={index} data={foodItem} add = {add} setAdd = {setAdd} />)}
                </tbody>
            </table>
        </div>
    )
}

export default FoodTable