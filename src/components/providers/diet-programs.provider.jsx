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
        console.log('programs', dietPrograms);
        console.log('user', userContext.user);
        const map = JSON.parse(localStorage.getItem('programsMap') || '{}')
        const email = userContext.user?.email || '';
        map[email] = dietPrograms;
        localStorage.setItem('programsMap', JSON.stringify(programsMap))
    }, [dietPrograms])

    useEffect(() => {
        dispatch({ type: 'SET', dietPrograms: dietPrograms })
    }, [userContext.user])

    return (
        <DietProgramsContext.Provider value={{ dietPrograms, dispatch }}>
            {props.children}
        </DietProgramsContext.Provider>
    )
}

export default DietProgramsProvider