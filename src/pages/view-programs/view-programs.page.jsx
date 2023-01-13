import React, { useContext } from 'react'
import './view-programs.css'
import ProgramCard from '../../components/view-programs/card/card.component'
import { DietProgramsContext } from '../../components/providers/diet-programs.provider'

const ViewPrograms = () => {
    const dietProgramsContext = useContext(DietProgramsContext);
    console.log(dietProgramsContext);
    return (
        <div className='viewPrograms'>
            {dietProgramsContext.dietPrograms.map((program, index) =>
                <ProgramCard program={program} key={index}
                />)}
        </div>
    )
}

export default ViewPrograms