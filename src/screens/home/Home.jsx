import React, { useEffect, useRef, useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase/firebase';
import { getDocs } from 'firebase/firestore';

const Home = () => {
  const [userid, setUserid] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
          setUserid(uid);
        } else {
         
          setUserid(null); 
        }
      });

      const querySnapshot = await getDocs(collection(db, 'data'));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    };

    fetchData();
  }, []);

  const todo = useRef();

  const home = async (event) => {
    event.preventDefault();
    console.log(todo.current.value);
    try {
      const docRef = await addDoc(collection(db, 'data'), {
        value: todo.current.value,
        userid: userid,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    todo.current.value = '';
  };

  return (
    <Box sx={{ height: '80vh' }} className='d-flex justify-content-center align-item-center'>
      <form onSubmit={home} className='d-flex justify-content-center flex-column w-25 gap-5'>
        <TextField id='standard-basic' label='Todo' variant='standard' inputRef={todo} />
        <Button type='submit' variant='contained'>
          Add
        </Button>
      </form>
    </Box>
  );
};

export default Home;