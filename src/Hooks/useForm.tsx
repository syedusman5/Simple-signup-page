import React, { useEffect, useState } from 'react'
import validation from '../utils/Validation';
import { toast } from 'react-toastify';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';


type FormValues = {
  username: string;
  email: string;
  password: string;
  password2: string;
};
const useForm = () => {
  const [values, setValues] = useState<FormValues>({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,

      }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isvalid = validation(values)
    if (isvalid) {
      toast.success("Form submitted successfully")
    }

  }
  
  useEffect(() => {
    toast("🌟 Welcome! Sign up now to join our community! 🚀 Let's create something amazing together! 💫",{
      position:"top-center",
      closeButton:true,
      hideProgressBar:true,
      autoClose:3000,
      style:{
        width:"400px",
        position:"absolute",
        bottom:"20px",
        right:"190px",
        backgroundColor:"grey",
        color:"#fff"
      }
    });
  }, [])

  //recaptcha setup
  
  
  return { handleChange, values, handleSubmit,
    setValues}

}

export default useForm
