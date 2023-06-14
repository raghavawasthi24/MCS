const express=require("express");
const router=express.Router();
const Task =require("../src/models/task.js");

router.post("/task", async (req,res)=>{
    const {title,description,date,status}=req.body;

    let taskcreate= new Task({
        title,description,date,status
    })

    await taskcreate.save().then((result)=>{
        res.status(200).json({
            msg:"posted success",
            result:result
        })
    }).catch((err)=>{
        res.status(401).json({
            msg:err
        })
    })
})



router.get("/task/:category",async(req,res)=>{
    const category=req.params.category;
    Task.find({status:category}).then((result)=>{
        res.status(200).json({
            msg:"sent success",
            data:result
        })
    })
})


router.patch("/:id",async (req,res)=>{
    const id=req.params.id;
    await Task.findByIdAndUpdate(id,req.body)
    .then((result)=>{
        res.status(200).json({
            msg:"successfully updated",
            result:result,
        })
    })
})


router.delete("/:id",async(req,res)=>{
    Task.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.status(200).json({
            msg:"deleted successfully",
        })
    }).catch((err)=>{
        msg:err
    })
})
module.exports=router;