import React ,{useEffect, useState}from 'react';
import { Tab, Tabs,Fab} from "@mui/material";
import "./Home.css";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import TaskCard from '../../components/TaskCard/TaskCard';
import Form from '../../components/Form/Form';

const Home = () => {
  const quesType = ["Pending","Completed"];
  const [value, setValue] = useState(1);
  const [selView,setSelView]=useState('Pending');
  const [data,setData]=useState([]);
  const [openForm,setOpenForm]=useState(false);

  useEffect(()=>{
     axios.get(`https://mcs-production.up.railway.app/api/task/${quesType[value]}`)
     .then((res)=>{
      console.log(res.data);
      setData(res.data.data)
     }).catch((err)=>{
      console.log(err);
     })
  },[value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event);
  };
  return (
    <div className='home'>
      <h2>Task Management</h2>
      <div className="mx-32 mt-0 mb-6  shadow-md shadow-gray-600">
      <Tabs value={value} onChange={handleChange} sx={{width:"100vw"}} centered>
        {quesType?.map((type, id) => {
          return <Tab label={type} key={id} className="shadow" sx={{width:"50%"}}/>;
        })}
      </Tabs>
    </div>
      <div className='taskBox'>
         {
          data.map((item,key)=>{
            return(<TaskCard title={item.title} desc={item.description} status={item.status} key={key}/>)
          })
         }
      </div>
      <Fab color="secondary" aria-label="add" sx={{position:"fixed",bottom:"4rem",right:"4rem"}} onClick={()=>setOpenForm(true)}>
        <AddIcon />
      </Fab>
      <div className={openForm?'form':"hide"}>
        <Form/>
      </div>
    </div>
  )
}

export default Home