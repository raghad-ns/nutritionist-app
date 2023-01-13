import React, { useEffect, useReducer } from 'react'
import { reducer } from '../../reducers/diet-programs.reducer.js';
export const DietProgramsContext = React.createContext(null)

/**
 * @param {{
*  children: React.ReactNode;
* }} props Component props
*/
const DietProgramsProvider = (props) => {
    // const [dietPrograms , setDietPrograms] = useState (JSON.parse (localStorage.getItem('dietPrograms') ||'[]')) ;
    const [dietPrograms, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('dietPrograms') || '[]'));
    useEffect (()=> {
        localStorage.setItem ('dietPrograms' , JSON.stringify(dietPrograms || []));
        console.log('programs' , dietPrograms);
    } , [dietPrograms])
    return (
        <DietProgramsContext.Provider value  = {{dietPrograms , dispatch}}>
            {props.children}
        </DietProgramsContext.Provider>
    )
}

export default DietProgramsProvider