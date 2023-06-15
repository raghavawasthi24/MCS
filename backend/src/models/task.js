const mongoose=require("mongoose");

const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    status:{
         type:String,
         default:"",
    },
    check:{
        type:Boolean,
        default:false,
    }

})

const Task=new mongoose.model("Task",TaskSchema);
module.exports=Task;