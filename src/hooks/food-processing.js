import { useState, useContext } from "react";
import { FoodContext } from "../components/providers/food.provider";

const useFoodProcessing = (props) => {
    const [name, setName] = useState(props.action.data ? props.action.data.name : '');
    const [image, setImage] = useState(props.action.data ? props.action.data.image : null);
    const [amount, setAmount] = useState(props.action.data ? props.action.data.amount : 0);
    const [calories, setCalories] = useState(props.action.data ? props.action.data.calories : 0);
    const foodContext = useContext(FoodContext);

    /**
    * @param {React.ChangeEvent<HTMLInputElement>} e 
    */
    const setNameOverride = (e) => {
        setName(e.target.value);
    }

    /**
    * @param {React.ChangeEvent<HTMLInputElement>} e 
    */
    const setAmountOverride = (e) => {
        setAmount(e.target.value);
    }
    
    /**
    * @param {React.ChangeEvent<HTMLInputElement>} e 
    */
    const setCaloriesOverride = (e) => {
        setCalories(e.target.value);
    }

    const addFood = () => {
        const date = Date.now();
        const tempFood = {
            id: date,
            name: name,
            image: image,
            amount: amount,
            calories: calories
        };
        foodContext.dispatch({ type: 'ADD', food: tempFood })
        props.setAction({ type: 'none', data: null })
    }

    const editFood = () => {
        const tempFood = {
            id: props.action.data.id,
            name: name,
            image: image,
            amount: amount,
            calories: calories
        };
        foodContext.dispatch({ type: 'EDIT', food: tempFood })
        props.setAction({ type: 'none', data: null })
    }
    
    /**
    * @param {React.ChangeEvent<HTMLInputElement>} e 
    */
    function imageUploaded(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    }

    return ({
        data: {
            name: {
                value: name,
                onChange: setNameOverride
            },
            amount: {
                value: amount,
                onChange: setAmountOverride
            },
            calories: {
                value: calories,
                onChange: setCaloriesOverride
            },
            image: {
                value: image,
                onChange: imageUploaded
            }
        },
        addFood: addFood,
        editFood: editFood
    })
}
export { useFoodProcessing }