import React, { useContext, useState } from 'react'
import { Plus } from 'phosphor-react'
import './food-table.css'
import FoodRow from '../../components/food-table/food-row/food-row.component'
import AddFood from '../../components/food-table/add-food/add-food.component'
import DeleteConfirmation from '../../components/core/delete-confirmation/delete-confirmation.component'
import { FoodContext } from '../../components/providers/food.provider'
import { UserContext } from '../../components/providers/user.provider'

const FoodTable = () => {

    const foodContext = useContext(FoodContext);
    const userContext = useContext (UserContext);
    const [action, setAction] = useState({ type: 'none', data: null });
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [itemMayBeDeleted, setItemMayBeDeleted] = useState(null);

    const addOrNot = () => {
        if (userContext.user?.email) {
            setAction({ type: 'add', data: null })
        }
        else {
            alert ('You are not allowed to add any item , login to have the ability to perform this process');
        }
    }

    return (
        <div className='foodTable'>
            {action.type !== 'none' && <div className="addFoodWrapper"><AddFood setAction={setAction} action={action} /></div>}
            {
                deleteConfirmation &&
                <DeleteConfirmation source='food' id={itemMayBeDeleted} setDeleteConfirmation={setDeleteConfirmation} />
            }
            <div className='innerButtonWrapper' >
                <button
                    className='innerButton'
                    onClick={addOrNot}
                >
                    Add <Plus size={18} weight='bold' />
                </button>
            </div>
            <table cellSpacing={15} >
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
                        <FoodRow
                            key={index}
                            data={foodItem}
                            setAction={setAction}
                            setDeleteConfirmation={setDeleteConfirmation}
                            setItemMayBeDeleted={setItemMayBeDeleted}
                        />)}
                </tbody>
            </table>
        </div>
    )
}

export default FoodTable