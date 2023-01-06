import React from 'react'
import Input from '../../common/input/input.component'
import './add-food.css'

const AddFood = (props) => {
  return (
    <div className='addFood'>
      <h2>Add new food type</h2>
      <Input label='Food name' type='text' />
      <Input label='image' type='text' />
      <Input label='amount (gm)' type='number' />
      <Input label='calories (cal)' type='text' />
      <div className="actionButtons">
        <button className='innerButton' onClick={()=>props.setAdd (false)}>Add</button>
        <button className='innerButton' onClick={()=>props.setAdd (false)}>Cancel</button>
      </div>
    </div>
  )
}

export default AddFood