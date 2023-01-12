import React, { useEffect, useState } from 'react'
export const DietProgramsContext = React.createContext(null)

/**
 * @param {{
*  children: React.ReactNode;
* }} props Component props
*/
const DietProgramsProvider = (props) => {
    const [dietPrograms , setDietPrograms] = useState (JSON.parse (localStorage.getItem('dietPrograms') ||'[]')) ;
    useEffect (()=> {
        localStorage.setItem ('dietPrograms' , JSON.stringify(dietPrograms || []));
        console.log('programs' , dietPrograms);
    } , [dietPrograms])
    return (
        <DietProgramsContext.Provider value  = {{dietPrograms , setDietPrograms}}>
            {props.children}
        </DietProgramsContext.Provider>
    )
}

export default DietProgramsProvider