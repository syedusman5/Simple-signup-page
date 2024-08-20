import React from 'react'
import FormSignUp from './FormSignUp'
import "./Form.css";

const Form = () => {

  
  return (
    <>
    <div className='form-container'>
      <div className='form-container-left'>
        <img src=' https://images.pexels.com/photos/3584309/pexels-photo-3584309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpeg' alt="left" className='form-img'/>
      </div>
      <FormSignUp/>
    </div>
    </>
  )
}

export default Form

