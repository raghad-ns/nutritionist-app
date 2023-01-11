import Input from '../../common/input/input.component.jsx'
import './patient-info.css'
import Select from '../../common/select/select.component.jsx'
import { CITIES } from '../../../data/cities.js'

const PatientInfo = () => {
    return (
        <div className='patientInfoWrapper' >
            <fieldset >
                <legend>paatient info</legend>
                <div className='patientInfo'>
                    <Input label='name' type='text' name='name' required />
                    <Input label='phone' type='number' name='phone' required />
                    <Input label='email' type='email' name='email' required />
                    <Input label='DOB' type='date' name='dob' required />
                    <Select label='city' name='city' required>
                        {CITIES.map((city, index) => <option value={city} key={index}>{city}</option>)}
                    </Select>
                </div>
            </fieldset>
        </div>
    )
}

export default PatientInfo