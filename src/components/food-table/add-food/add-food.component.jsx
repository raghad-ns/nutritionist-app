import { Image } from 'phosphor-react';
import React from 'react'
import { useFoodProcessing } from '../../../hooks/food-processing';
import ImagePicker from '../../common/image-picker/image-picker.component';
import Input from '../../common/input/input.component'
import PopUp from '../../core/pop-up/pop-up.component';
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

  const foodProcess = useFoodProcessing(props);

  return (
    <PopUp>
      <h2>{props.action.type === 'add' ? 'Add new food type' : 'edit'}</h2>
      <Input
        label='Food name'
        name='name'
        type='text'
        value={foodProcess.data.name.value}
        onChange={foodProcess.data.name.onChange}
      />
      <Input
        label='amount (gm)'
        name='amount'
        type='number'
        value={foodProcess.data.amount.value}
        onChange={foodProcess.data.amount.onChange}
      />
      <Input
        label='calories (cal)'
        name='calories'
        type='number'
        value={foodProcess.data.calories.value}
        onChange={foodProcess.data.calories.onChange}
      />
      <ImagePicker label='image' name='image' onChange={foodProcess.data.image.onChange} />
      <div className="imagePreview">
        {
          foodProcess.data.image.value
            ? <img src={foodProcess.data.image.value} alt='' />
            : <Image size={100} color='#444' />
        }
      </div>
      <div className="actionButtons">
        {
          props.action.data
            ? <button className='innerButton' onClick={foodProcess.editFood}>Edit</button>
            : <button className='innerButton' onClick={foodProcess.addFood}>Add</button>
        }
        <button className='innerButton' onClick={() => props.setAction({ type: 'none', data: null })}>Cancel</button>
      </div>
    </PopUp>
  )
}

export default AddFood