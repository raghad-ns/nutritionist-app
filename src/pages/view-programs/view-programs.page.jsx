import React, { useContext, useMemo } from 'react'
import './view-programs.css'
import ProgramCard from '../../components/view-programs/card/card.component'
import { DietProgramsContext } from '../../components/providers/diet-programs.provider'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../../components/view-programs/search-bar/search-bar.componet'

const ViewPrograms = () => {
    const [param] = useSearchParams();
    const dietProgramsContext = useContext(DietProgramsContext);
    const filteredPrograms = useMemo(() => {
        return dietProgramsContext.dietPrograms.filter(program =>
            program.patientInfo.name.includes(param.get('name') || ''))
    }, [param, dietProgramsContext.dietPrograms])

    return (
        <div className="viewProgramsWrapper">
            <SearchBar />
            <div className='viewPrograms'>
                {filteredPrograms.map((program, index) =>
                    <ProgramCard program={program} key={index}
                    />)}
            </div>
        </div>
    )
}

export default ViewPrograms