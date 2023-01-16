// import jsPDF from 'jspdf'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { FilePdf, TrashSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { PdfDocument } from '../../test-pdf/pdfTester'
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
  const deleteProgram = () => {
    props.setItemMayBeDeleted(props.program.id)
    props.setDeleteConfirmation(true)
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
        <Link to={`/dietProgram/${props.program.id}`}>View details</Link>
      </div>
      <div className='actionButtons'>
        <button
          onClick={deleteProgram}
        >
          <TrashSimple size={24} color='red' />
        </button>
        <PDFDownloadLink
          document={<PdfDocument
            program={props.program} />}
          fileName={props.program.patientInfo.name + '.pdf'}
        >
          <FilePdf size={26} />
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default ProgramCard