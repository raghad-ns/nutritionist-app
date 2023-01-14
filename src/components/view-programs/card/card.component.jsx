import { FilePdf, TrashSimple } from 'phosphor-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DietProgramsContext } from '../../providers/diet-programs.provider'
import './card.css'

/**
 * 
 * @param {{
 * program : {
 * id : number ;
 * patientInfo : {
 * name : string ;
 * phone : number ;
 * email : string ;
 * dof : Date
 * city : string;};
 * mealsPerDay : Array <{
 * id : number;
 * name : String;
 * image : String;
 * amount : number;
 * calories : number;}> ;
 * }
 * }} props 
 * @returns 
 */
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
        {/* <span>View details </span> */}
        <Link to = {`/dietProgram/${props.program.id}`}>View details</Link>
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