import React, { useRef } from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase/firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {

const navigate = useNavigate()

  //getting value
  const email = useRef()
  const password = useRef()
  //login
  const login = (event) =>{
    event.preventDefault();

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
   navigate('/')
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
    email.current.value = ''
    password.current.value = ''

  }
return (
    <Box sx={{height : '80vh'}} className='d-flex justify-content-center align-item-center'>
      <form onSubmit={login} className='d-flex justify-content-center flex-column w-25 gap-5'>
      <TextField id="standard-basic" label="Email" variant="standard" inputRef={email} required/>
      <TextField id="standard-basic" label="Password" variant="standard"  inputRef={password} required/>
      <Button type='submit' variant="contained">Login</Button>
      </form>
    </Box>
  )
}

export default Login