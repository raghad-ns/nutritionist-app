import React, { useContext, useState } from 'react'
import { Plus } from 'phosphor-react'
import './food-table.css'
import FoodRow from '../../components/food-table/food-row/food-row.component'
import AddFood from '../../components/food-table/add-food/add-food.component'
import { FoodContext } from '../../components/providers/food.provider'

const FoodTable = () => {

    const [action, setAction] = useState({type : 'none' , data : null});
    const foodContext = useContext(FoodContext);

    return (
        <div className='foodTable'>
            {action.type !== 'none' && <div className="addFoodWrapper"><AddFood setAction={setAction} action = {action} /></div>}
            <div className={action === 'add' ? 'innerButtonWrapper blur' : 'innerButtonWrapper'} >
                <button className='innerButton' onClick={() => setAction({type : 'add' , data : null})}>Add <Plus size={18} weight='bold' /></button>
            </div>
            <table cellSpacing={15} className={action.type !== 'none' ? 'blur' : ''}>
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
                        <FoodRow key={index} data={foodItem} action={action} setAction={setAction} />)}
                </tbody>
            </table>
        </div>
    )
}

export default FoodTable