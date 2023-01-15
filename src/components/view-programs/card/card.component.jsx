// import jsPDF from 'jspdf'
import { FilePdf, TrashSimple } from 'phosphor-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DietProgramsContext } from '../../providers/diet-programs.provider'
// import ReactPDF from '@react-pdf/renderer';
import './card.css'
// import image from '../../../assets/not-found.jpg'

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

  const generatePDF = () => {
    // let doc = new jsPDF('portrait' , 'px' , 'a4' , 'false');
    // doc.addImage(image , 'JPG' , 65 , 20 , 500 , 400) ; 
    // doc.save('test');

    // ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);

    // // using Java Script method to get PDF file
    // fetch('Sample.pdf').then(response => {
    //   response.blob().then(blob => {
    //     // Creating new object of PDF file
    //     const fileURL = window.URL.createObjectURL(blob);
    //     // Setting various property values
    //     let alink = document.createElement('a');
    //     alink.href = fileURL;
    //     alink.download = 'Sample.pdf';
    //     alink.click();
    //   })
    // })

  }

  return (
    <div className='programCard'>
      <div className='details'>
        <span>Name : {props.program.patientInfo.name} </span>
        <span>Weekly calories : {calories} </span>
        {/* <span>View details </span> */}
        <Link to={`/dietProgram/${props.program.id}`}>View details</Link>
      </div>
      <div className='actionButtons'>
        <button
          onClick={deleteProgram}
        >
          <TrashSimple size={24} color='red' />
        </button>
        <button onClick={generatePDF}><FilePdf size={26} /></button>
      </div>
    </div>
  )
}

export default ProgramCard