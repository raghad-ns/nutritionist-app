
import { DietProgramsContext } from '../components/providers/diet-programs.provider.jsx'
import { useState, useContext} from 'react';

const useAddDietProgram = () => {
    const dietProgramsContext = useContext(DietProgramsContext);
    const programs = dietProgramsContext.dietPrograms;
    const setPrograms = dietProgramsContext.setDietPrograms;
    const [mealsPerDay, setMealsPerDay] = useState([
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ]);

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */
    const handleAddProgram = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const dob = e.target.dob.value;
        const city = e.target.city.value;
        const patientInfo = {
            name: name,
            phone: phone,
            email: email,
            dob: dob,
            city: city
        };
        console.log(patientInfo);
        setPrograms([...programs, { id: Date.now(), patientInfo: patientInfo, mealsPerDay: mealsPerDay }])
        reset(e);
    }

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */
    const reset = (e) => {
        console.log('reset');
        e.target.city.value = e.target.city.defaultSelected
        e.target.dob.value = null
        e.target.email.value = null
        e.target.phone.value = null
        e.target.name.value = null
        setMealsPerDay([
            [],
            [],
            [],
            [],
            [],
            [],
            [],
        ]);
    }

    return {
        handleAddProgram: handleAddProgram,
        reset: reset,
        meals: {
            mealsPerDay: mealsPerDay,
            setMealsPerDay: setMealsPerDay
        }
    };

}
export { useAddDietProgram }