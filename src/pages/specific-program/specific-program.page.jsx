import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DietProgramsContext } from '../../components/providers/diet-programs.provider';
import ProgramCard from '../../components/view-programs/card/card.component';

const SpecificProgram = () => {
    const param = useParams();
    const dietProgramsContext = useContext(DietProgramsContext);
    console.log('param : ' , param.id);
    const program = dietProgramsContext.dietPrograms.find(diet => diet.id === Number(param.id));
    console.log( 'current program is : ', program);
  return (
    <div className='specificProgram'>
        <ProgramCard program = {program} />
    </div>
  )
}

export default SpecificProgram