import React from 'react'
import './add.css'
import PatientInfo from '../../components/add/patient-info/patient-info.component'

const Add = () => {
    return (
        <div className='add'>
            <div className="addActionButtons">
                <button className='innerButton'> cancel</button>
                <button className='innerButton'> save</button>
            </div>
            <PatientInfo />

        </div>
    )
}

export default Add