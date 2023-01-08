import Input from '../../common/input/input.component.jsx'
import React from 'react'
import './patient-info.css'
import Select from '../../common/select/select.component.jsx'
import { CITIES } from '../../../data/cities.js'

const PatientInfo = () => {
    return (
        <div className='patientInfoWrapper' >
            <fieldset >
                <legend>paatient info</legend>
                <form className='patientInfo'>
                    <Input label='name' type='text' />
                    <Input label='phone' type='number' />
                    <Input label='email' type='email' />
                    <Input label='DOB' type='date' />
                    <Select label='city'>
                        {CITIES.map((city, index) => <option value={city} key={index}>{city}</option>)}
                    </Select>
                </form>
            </fieldset>
        </div>
    )
}

export default PatientInfo