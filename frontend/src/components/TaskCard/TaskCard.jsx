import React, { useEffect} from 'react';
import "./TaskCard.css";
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
// import { checkere } from '../../pages/Home/Home';


const TaskCard = (props) => {
    

    const delTask=()=>{
        axios.delete(`https://mcs-production.up.railway.app/api/${props.id}`)
        .then((res)=>{
            console.log(res)
            window.location.reload();
        })
    }


    useEffect(()=>{
        // if(props.status=="Completed"){
        // checked=true;
        // console.log(props.status)
        // }
        // else{
        // checked=false;
        // console.log(props.status)
        // }
        // console.log(checkere)
    },[props.status])

    const statusHandler=()=>{
        let changedStatus="",changedCheck="";
        if(props.status==="Pending"){
        changedStatus="Completed";
         changedCheck=true;
        }
        else{
        changedStatus="Pending";
        changedCheck=false;
        }

        axios.patch(`https://mcs-production.up.railway.app/api/${props.id}`,{
            status:changedStatus,
            check:changedCheck
        })
        .then((res)=>{
            console.log(res);
            window.location.reload();
        })
    }
  return (
    <div className='card'>
        <div className='taskTxt'>
           
         <Checkbox color="success" checked={localStorage.getItem("check")} onChange={statusHandler}/>
         <div className='taskPara'>
                 <p>{props.title}</p>
                 <p style={{color:"grey",fontSize:"0.8rem"}}>{props.desc}</p>
         </div>
         </div>
         <DeleteIcon color='error'onClick={delTask}/>
    </div>
  )
}

export default TaskCard