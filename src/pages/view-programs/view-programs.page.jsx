import React, { useContext, useMemo } from 'react'
import './view-programs.css'
import ProgramCard from '../../components/view-programs/card/card.component'
import { DietProgramsContext } from '../../components/providers/diet-programs.provider'
import Input from '../../components/common/input/input.component.jsx'
import { useSearchParams } from 'react-router-dom'

const ViewPrograms = () => {
    const [param, setParam] = useSearchParams();
    const dietProgramsContext = useContext(DietProgramsContext);
    const filteredPrograms = useMemo(() => {
        return dietProgramsContext.dietPrograms.filter(program =>
            program.patientInfo.name.includes(param.get('name') || ''))
    }, [param, dietProgramsContext.dietPrograms])

    const updateSearchParams = (e) => {
        const tempParam = new URLSearchParams(param);
        tempParam.delete('name');
        if (e.target.value !== '')
            tempParam.set('name', e.target.value);
        setParam(tempParam)
    }

    return (
        <div className="viewProgramsWrapper">
            <Input type='text' label='search by name : '
                value={param.get('name') || ''}
                onChange={updateSearchParams}
            />
            <div className='viewPrograms'>
                {filteredPrograms.map((program, index) =>
                    <ProgramCard program={program} key={index}
                    />)}
            </div>
        </div>
    )
}

export default ViewPrograms