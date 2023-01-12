import React, { useEffect, useReducer } from 'react'
import { reducer } from '../../reducers/food.reducer';
export const FoodContext = React.createContext(null);

/**
 * @param {{
*  children: React.ReactNode;
* }} props Component props
*/

const FoodProvider = (props) => {
    const [food, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('food') || '[]'));
    useEffect(() => {
        localStorage.setItem('food', JSON.stringify(food || []))
    }, [food])
    return (
        <FoodContext.Provider value={{ food: food, dispatch: dispatch }}>
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodProvider