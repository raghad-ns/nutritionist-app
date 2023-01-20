import React, { useContext } from 'react'
import './specific-program.css'
import { useParams } from 'react-router-dom'
import { DietProgramsContext } from '../../components/providers/diet-programs.provider';
import MealCard from '../../components/add/meal-card/meal-card.component';
import { DAYS } from '../../data/days';

const SpecificProgram = () => {

  const param = useParams();
  const dietProgramsContext = useContext(DietProgramsContext);
  const program = dietProgramsContext.dietPrograms.find(diet => diet.id === Number(param.id));

  return (
    <div className='specificProgram'>
      <h1>{program.patientInfo.name}'s program : </h1>
      {
        program.mealsPerDay.map((mealsForThisDay , index) =>
          <div className="mealsForThisDay" key={index}>
            <div className="day">
              {DAYS[index]}
            </div>
            <div className="meals">
              {
                mealsForThisDay.length 
                ?mealsForThisDay.map((meal , index) => <MealCard {...meal} key = {index}/>)
                : <span> no meals for this day</span>
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default SpecificProgram