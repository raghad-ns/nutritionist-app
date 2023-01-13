import { FilePdf, TrashSimple } from 'phosphor-react'
import React from 'react'
import './card.css'

const ProgramCard = (props) => {
  console.log('program' , props.program);
  let calories = 0 ;
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
        <button><TrashSimple size={24} color='red' /></button>
        <button><FilePdf size={26} /></button>
      </div>
    </div>
  )
}

export default ProgramCard