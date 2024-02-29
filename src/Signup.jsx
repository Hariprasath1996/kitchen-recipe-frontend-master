import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { API } from './global';
import * as yup from "yup";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function Signup() {
  const navigate=useNavigate();
  const[show,setShow]=useState("success")
  const formValidationSchema=yup.object({

    firstname:yup.string().required(),
    lastname:yup.string().required(),
    email:yup.string().required().email(),
    password:yup.string().required(),
  }

  )
  const {handleChange,handleSubmit,values,handleBlur,touched,errors}=useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      email:"",
      password:""
    },
    validationSchema:formValidationSchema,
    onSubmit:(value)=>{
console.log(value)
addsignup(value)
    }
  })

  const addsignup=async (value)=>{
    const data= await fetch(`${API}/signup`,{
      method:"POST",
      headers: {"Content-type": "application/json",},
      body:JSON.stringify(value)
  })
  if(data.status==400){
    console.log("error")
    setShow("error")
    toast.error('Username already exists🫡!',{
                           position: "top-right",
                           autoClose: 1000,
                          color:"white"
                       });
  
  }else{
    setShow("success")
  const result=await data.json()
  console.log(result)
  toast.success('Account Created Successfully 💯✨!',{
                         position: "top-right",
                         autoClose: 1000,
                         color:"white"
                     });
 {show ? navigate("/login"):null}

}}


  return (
    <div>
      {show==="success"?null:<div className='sign1'><p className='sign'>user alrady exists</p></div>}
      <form className='signup' onSubmit={handleSubmit}>
       <h1>signup</h1>
        <TextField  onBlur ={handleBlur} error={touched.firstname && errors.firstname} helperText={touched.firstname && errors.firstname ?errors.firstname :null} value={values.firstname} name="firstname" onChange={handleChange} label="firstname" variant="outlined"/>
      <TextField onBlur={handleBlur} error={touched.lastname && errors.lastname} helperText={touched.lastname && errors.lastname ?errors.lastname :null} value={values.lastname} name="lastname" onChange={handleChange} label="lastname" />
      <TextField  onBlur={handleBlur} error={touched.email && errors.email} helperText={touched.email && errors.email ?errors.email :null} value={values.email} name="email" onChange={handleChange} label="email" />
      <TextField  onBlur={handleBlur} error={touched.password && errors.password} helperText={touched.password && errors.password ?errors.password :null} value={values.password} name="password" onChange={handleChange} type="password"  label="password"/>
   
      <Button  type="submit"  color={show} variant='contained'>{show==="success"?"submit":"retry"}</Button>
       </form>
    </div>
  );
}
