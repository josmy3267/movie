import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import axios from 'axios';

const Add = () => {
  
  
  const [form,setform]=useState({
    "movieName":'',
    "category":'',
    "director":'',
    "releasingyear":''
  })
  useEffect(()=>{
    if(location.state!=null){
      setform({...form,
        moviename:location.state.movie.movieName,
        category:location.state.movie.category,
        director:location.state.movie.director,
        releaseYear:location.state.movie.releaseYear
  
      })
    }
  })
  
  let postData=()=>{
    if(location.state!=null){
    axios.put('http://localhost:4000/movie-updation'+location.state.movie._id,form)
      .then((res)=>{
        alert('Data updated');
        Navigate('/')
      }).catch((error)=>{
        console.log(error);

      })

      }
      else{

    // console.log(form);
    axios.post('http://localhost:4000/new-movie',form).then((res)=>{alert('movie data posted')
    Navigate('/');
  }) 
  }
}

  function valueCap(e)
{
  // console.log(e)
  setform({...form,[e.target.name]:e.target.value})
}
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br/><TextField id="outlined-basic" 
      label="Required"
      textcolor="primary"
      name="mname"
      onchange={valueCap}
      variant="outlined"
       /><br/>
       <TextField id="outlined-basic" 
      label="Required"
      textcolor="primary"
      name="category"
      onchange={valueCap}
      variant="outlined"
       /><br/>
       <TextField id="outlined-basic" 
      label="Required"
      textcolor="primary"
      name="director"
      onchange={valueCap}
      variant="outlined"
       /><br/>
       <TextField id="outlined-basic" 
      label="Required"
      textcolor="primary"
      name="ryear"
      onchange={valueCap}
      variant="outlined"
       /><br/>
       
       <Stack direction="column">
      <Button variant="contained" onClick={postData}>Confirm Booking</Button><br/>
    </Stack>
    </Box>
  )
}

export default Add