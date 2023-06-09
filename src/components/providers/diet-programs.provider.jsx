import React, { useContext, useEffect, useReducer } from 'react'
import { reducer } from '../../reducers/diet-programs.reducer.js';
import { UserContext } from './user.provider.jsx';
export const DietProgramsContext = React.createContext(null)

/**
 * @param {{
*  children: React.ReactNode;
* }} props Component props
*/
const DietProgramsProvider = (props) => {

    const userContext = useContext(UserContext);
    const programsMap = JSON.parse(localStorage.getItem('programsMap') || '{}')
    const userEmail = userContext.user?.email || '';
    const currentprograms = programsMap[userEmail || ''] || [];
    const [dietPrograms, dispatch] = useReducer(reducer, currentprograms);

    useEffect(() => {
        programsMap[userEmail] = dietPrograms;
        localStorage.setItem('programsMap', JSON.stringify(programsMap))
    }, [dietPrograms])

    useEffect(() => {
        dispatch({ type: 'SET', dietPrograms: programsMap[userContext.user.email] || [] })
    }, [userContext.user])

    return (
        <DietProgramsContext.Provider value={{ dietPrograms, dispatch }}>
            {props.children}
        </DietProgramsContext.Provider>
    )
}

export default DietProgramsProvider