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
    date:{
        type:String,
        reuired:true
    },
    status:{
         type:String,
         default:"",
    }

})

const Task=new mongoose.model("Task",TaskSchema);
module.exports=Task;