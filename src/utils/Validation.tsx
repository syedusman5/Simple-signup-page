import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useForm from '../Hooks/useForm';
import React, { useEffect, useState } from 'react'
type FormValues = {
    username: string;
    email: string;
    password: string;
    password2: string;
};

export default function validation(values:FormValues){
    {/*username validation*/}
    if(!values.username.trim()){
        toast.error("username is required");
        return false
    }

     {/*email validation*/}
    if(!values.email.trim()){
        toast.error("email is required");
        return false
    }
    else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email)){
        toast.error("email is invalid");
        return false
    }

     {/*password validation*/}
     if(!values.password.trim()){
        toast.error("password is required");
        return false
     }
     else if(values.password.length < 8){
       toast.error("Password must contain 8 characters or more")
       return false
     }
      {/*confirm password validation*/}
      if(!values.password2.trim()){
        toast.error("Confirm password is required");
        return false
      }
      else if(values.password!==values.password2){
        toast.error("Password Confirmation Mismatch ")
        return false
      }

      return true
}