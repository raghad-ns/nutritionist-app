import React from 'react'
import FoodRow from '../../components/food-table/food-row/food-row.component'

const FoodTable = () => {
    return (
        <div>
            <table>
                <tr>
                    <th>food</th>
                    <th>image</th>
                    <th>amount</th>
                    <th>calories</th>
                    <th>action</th>
                </tr>
                <FoodRow/>
            </table>
        </div>
    )
}

export default FoodTable