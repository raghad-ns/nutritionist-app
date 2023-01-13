import { FilePdf, TrashSimple } from 'phosphor-react'
import React, { useContext } from 'react'
import { DietProgramsContext } from '../../providers/diet-programs.provider'
import './card.css'

const ProgramCard = (props) => {
  const dietProgramsContext = useContext(DietProgramsContext)
  const deleteProgram = () => {
    dietProgramsContext.dispatch({ type: 'DELETE', id: props.program.id })
  }
  let calories = 0;
  props.program.mealsPerDay.forEach(meals => {
    meals.forEach(meal => calories += Number(meal.calories))
  })

  return (
    <div className='programCard'>
      <div className='details'>
        <span>Name : {props.program.patientInfo.name} </span>
        <span>Weekly calories : {calories} </span>
        <span>View details </span>
      </div>
      <div className='actionButtons'>
        <button
          onClick={deleteProgram}
        >
          <TrashSimple size={24} color='red' />
        </button>
        <button><FilePdf size={26} /></button>
      </div>
    </div>
  )
}

export default ProgramCard