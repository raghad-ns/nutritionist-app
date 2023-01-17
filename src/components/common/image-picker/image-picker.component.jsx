import React from 'react'
import './image-picker.css'
/** 
* 
* @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {label : string;}} props 
*/
const ImagePicker = (props) => {
    const {label , ...imagePickerProps} = props;
  return (
    <div className='imagePickerWrapper'>
        <span>{label}</span>
        <label htmlFor="imageInput" className='innerButton'>select image</label>
        <input type="file" id='imageInput' {...imagePickerProps}/>
    </div>
  )
}

export default ImagePicker