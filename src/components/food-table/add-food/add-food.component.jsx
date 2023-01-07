import React, { useContext, useState } from 'react'
import Input from '../../common/input/input.component'
import { FoodContext } from '../../providers/food.provider';
import './add-food.css'

const AddFood = (props) => {
  const [name, setName] = useState(props.action.data ? props.action.data.name : '');
  const [image, setImage] = useState(props.action.data ? props.action.data.image : '');
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
    props.setAction({type : 'none' , data : null})
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
    props.setAction({type : 'none' , data : null})
  }

  return (
    <div className='addFood'>
      <h2>Add new food type</h2>
      <Input label='Food name' type='text' value={name} onChange={e => setName(e.target.value)} />
      <Input label='image' type='text' value={image} onChange={e => setImage(e.target.value)} />
      <Input label='amount (gm)' type='number' value={amount} onChange={e => setAmount(e.target.value)} />
      <Input label='calories (cal)' type='number' value={calories} onChange={e => setCalories(e.target.value)} />
      <div className="actionButtons">
        {
          props.action.data 
          ? <button className='innerButton' onClick={editFood}>Edit</button>
          : <button className='innerButton' onClick={addFood}>Add</button>
        }
        <button className='innerButton' onClick={() => props.setAction({type : 'none' , data : null})}>Cancel</button>
      </div>
    </div>
  )
}

export default AddFood