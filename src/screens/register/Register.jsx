import React, { useRef } from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

const Register = () => {
   //getting value
   const email = useRef()
   const password = useRef()



   //login
   const register = (event) =>{

     event.preventDefault();
     console.log('register clicked clicked');
     console.log(email.current.value);
     console.log(password.current.value);
     email.current.value = ''
     password.current.value = ''
   }

   
 return (
     <Box sx={{height : '80vh'}} className='d-flex justify-content-center align-item-center'>
       <form onSubmit={register} className='d-flex justify-content-center flex-column w-25 gap-5'>
       <TextField id="standard-basic" label="Email" variant="standard" inputRef={email} required/>
       <TextField id="standard-basic" label="Password" variant="standard"  inputRef={password} required/>
       <Button type='submit' variant="contained">Register</Button>
       </form>
     </Box>
   )
}

export default Register