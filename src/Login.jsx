import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { API } from './global';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateValue } from './StateProvider';
export function Login() {
  const[{user},dispatch]=useStateValue();

  const navigate=useNavigate();
  const[formstate,setFormstate]=useState("success")
//   const {handleChange,handleSubmit,values}=useFormik({
//     initialValues:{
//       email:"",
//       password:"",
//     },
//     onSubmit:async(value)=>{
//       console.log(value)
//       const data= await fetch(`${API}/userLogin`,{
//         method:"POST",
//         headers: {"Content-type": "application/json",},
//         body:JSON.stringify(value)
      
//         })
       
         
//         if(data.status===401){
// console.log("error ❌")
// setFormstate("error")
// toast.error('Invalid Credentials🫡!',{
//   position: "top-right",
//   autoClose: 1000,
//  color:"white"
// });
//         }else{
//           setFormstate("success")
        
// const result=await data.json()
// toast.success('Login Successfully 💯✨!',{
//   position: "top-right",
//   autoClose: 1000,
//   color:"white"
// });
// console.log(result)
// localStorage.setItem("token",result.token)

// navigate("/allrecipe")
//         }
//     }
//   })

const {handleChange,handleSubmit,values}=useFormik({
  initialValues:{
    
    email:"",
    password:""
  },
  
  onSubmit:(value)=>{
console.log(value)
addlogin(value)
  }
})

const addlogin=async (value)=>{
  const data= await fetch(`${API}/userLogin`,{
    method:"POST",
    headers: {"Content-type": "application/json",},
    body:JSON.stringify(value)
})
if(data.status==401){
  console.log("error")
  setFormstate("error")
  toast.error('Invalid Credentials🫡!',{
                         position: "top-right",
                         autoClose: 2000,
                        color:"white"
                     });

}else{
  setFormstate("success")
const result=await data.json()
console.log(result)
localStorage.setItem("token",result.token)
toast.success('Login  Successfull 💯✨!',{
                       position: "top-right",
                       autoClose: 2000,
                       color:"white"
                   });
                   navigate("/allrecipe")

}}  

const signin=e=>{

dispatch({
  type:"SET_USER",
  user:values.email,
})
}


  return (
    <div>
      <div className='mn'>
      <p>Test user: hasath@gmail.com</p>
        <p>Test password: 12345678</p>
      </div>
     
    <div>
      {formstate==="success"?null:<div className='sign1'><p className='sign'>Invalid Credentials</p></div>}
      <form className='login' onSubmit={handleSubmit}>
        <h1>login</h1>
       <TextField   value={values.email} name="email" onChange={handleChange} label="email" />
      <TextField   name="password" onChange={handleChange} type="password"  label="password"/>
      
      <Button onClick={signin}  type="submit"  color={formstate} variant='contained'>{formstate==="success"?"submit":"retry"}</Button>
     
  
     
 
      </form>
     
     
    </div>
    
      <p className='for' onClick={()=>navigate("/forgot")} >forgot password ?</p>
    
    </div>
  );
}
