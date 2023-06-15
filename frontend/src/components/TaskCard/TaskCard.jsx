import React from 'react';
import "./TaskCard.css";
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskCard = (props) => {
  return (
    <div className='card'>
        <div className='taskTxt'>
         <Checkbox color="success" defaultChecked={props.status=="Completed"?true:false}/>
         <div className='taskPara'>
                 <p>{props.title}</p>
                 <p style={{color:"grey",fontSize:"0.8rem"}}>{props.desc}</p>
         </div>
         </div>
         <DeleteIcon color='error'/>
    </div>
  )
}

export default TaskCard