import { Image } from 'phosphor-react';
import React, { useContext, useState } from 'react'
import ImagePicker from '../../common/image-picker/image-picker.component';
import Input from '../../common/input/input.component'
import PopUp from '../../core/pop-up/pop-up.component';
import { FoodContext } from '../../providers/food.provider';
import './add-food.css'

/**
 * 
 * @param {{
 * setAction : void ;
 * action : {
 * type : string; 
 * data : {
 * id : number ;
 * name : string ;
 * image : string ; 
 * amount : number ;
 * calories : number}}
 * }} props 
 * @returns 
 */
const AddFood = (props) => {
  const [name, setName] = useState(props.action.data ? props.action.data.name : '');
  const [image, setImage] = useState(props.action.data ? props.action.data.image : null);
  const [amount, setAmount] = useState(props.action.data ? props.action.data.amount : 0);
  const [calories, setCalories] = useState(props.action.data ? props.action.data.calories : 0);
  const foodContext = useContext(FoodContext);

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
      console.log(base64String);
    }
    reader.readAsDataURL(file);
  }

  return (
    <PopUp>
      <h2>{props.action.type === 'add' ? 'Add new food type' : 'edit'}</h2>
      <Input label='Food name' type='text' value={name} onChange={e => setName(e.target.value)} />
      {/* <Input label='image' type='text' value={image} onChange={e => setImage(e.target.value)} /> */}
      <Input label='amount (gm)' type='number' value={amount} onChange={e => setAmount(e.target.value)} />
      <Input label='calories (cal)' type='number' value={calories} onChange={e => setCalories(e.target.value)} />
      <ImagePicker label='image' onChange={imageUploaded} />
      <div className="imagePreview">
        {
          image
            ? <img src={image} alt=''/>
            : <Image size={100} color = '#444'/>
        }
      </div>
      <div className="actionButtons">
        {
          props.action.data
            ? <button className='innerButton' onClick={editFood}>Edit</button>
            : <button className='innerButton' onClick={addFood}>Add</button>
        }
        <button className='innerButton' onClick={() => props.setAction({ type: 'none', data: null })}>Cancel</button>
      </div>
    </PopUp>
  )
}

export default AddFood