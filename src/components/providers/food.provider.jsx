import React, { useEffect , useState } from 'react'
export const FoodContext = React.createContext(null);

/**
 * @param {{
*  children: React.ReactNode;
* }} props Component props
*/

const FoodProvider = (props) => {
    const [food , setFood] = useState(JSON.parse(localStorage.getItem('food') || '[]')) ;
    useEffect(() => {
        localStorage.setItem('food', JSON.stringify(food || []))
        console.log(food);
    }, [food])
    return (
        <FoodContext.Provider value={{ food: food, setFood: setFood }}>
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodProvider