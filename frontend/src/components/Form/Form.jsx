import React, { useState } from 'react';
import "./Form.css";
import {FormControl,InputLabel,Select,MenuItem ,TextField,Button} from "@mui/material";
import axios from 'axios';

const Form = () => {
    const initialvalues={
       title:"",
       description:"",
       date:"",
       status:"",
    }

    const [formvalues,setFormvalues]=useState(initialvalues);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormvalues({...formvalues,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formvalues);
        axios.post("https://mcs-production.up.railway.app/api/task/",formvalues)
        .then((res)=>{
         console.log(res);
         window.location.reload();
        }).catch((err)=>{
         console.log(err);
        })
    }
  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Title" variant="standard" name="title" sx={{margin:"0.5rem",width:"90%"}} value={formvalues.title} onChange={handleChange}/>
        
        <TextField id="standard-basic" label="Description" variant="standard" name="description" sx={{margin:"0.5rem",width:"90%"}} value={formvalues.description} onChange={handleChange}/>
        <FormControl sx={{margin:"0.5rem",width:"90%"}}>

        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          value={formvalues.status}
          label="Status"
          onChange={handleChange}
          name="status"
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
        
      </FormControl>
      <Button variant="outlined" sx={{margin:"0.5rem",width:"6rem"}} type='submit'>Post</Button>
        </form>
    </div>
  )
}

export default Form