import { useState , useContext } from "react";
import { FoodContext } from "../components/providers/food.provider";

const useFoodProcessing = (props) => {
    const [name, setName] = useState(props.action.data ? props.action.data.name : '');
    const [image, setImage] = useState(props.action.data ? props.action.data.image : null);
    const [amount, setAmount] = useState(props.action.data ? props.action.data.amount : 0);
    const [calories, setCalories] = useState(props.action.data ? props.action.data.calories : 0);
    const foodContext = useContext(FoodContext);

    const setNameOverride = (e) => {
        setName(e.target.value);
    }
    const setAmountOverride = (e) => {
        setAmount(e.target.value);
    }
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

    function imageUploaded(e) {
        let base64String = "";
        var file = e.target.files[0];
        console.log(file);
        var reader = new FileReader();
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
            base64String = 'data:image/jpeg;base64,' + base64String
            setImage(base64String);
            console.log('image', base64String);
        }
        reader.readAsDataURL(file);
    }

    return ({
        data : {
            name : {
                value : name , 
                onChange : setNameOverride
            } ,
            amount : {
                value : amount , 
                onChange : setAmountOverride
            } , 
            calories : {
                value : calories , 
                onChange : setCaloriesOverride
            } ,
            image : {
                value : image , 
                onChange : imageUploaded
            }
        } ,
        addFood : addFood , 
        editFood : editFood
    })
}
export {useFoodProcessing}