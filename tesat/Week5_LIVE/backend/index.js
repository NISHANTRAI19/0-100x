
const express= require("express");

const {createTodo}=require("./types");
const {updateTodo}= require("./types");
const { todo } = require("./db");

const app= express();


app.use(express.json())


app.post("/todo",async (req,res)=>{

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong inputs",
        })
        return;
    }

   await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed:false
   })

   res.json({
    msg:"todo created"
   })
})


app.get("/todos",async (req,res)=>{

    const todos = await todo.find();
    res.json({
        todos
    })

    res.json({msg:"You are logged in"});
})
app.put("/completed",async (req,res)=>{

    res.json({msg:"You are logged in"});

    const updatePayload = req.body;
    const parsedPayload =updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong inputs",
        })
        return;
    }
    await todo.update({
        _id:req.body.id},{
            completed: true
        })
        res.json({
            msg:"Todo marked as completed"
        })

    })
    



app.use((err,req,res,next)=>{
    if (err)
    res.status(403).json({msg:err})
})

app.listen(3000,()=>{console.log("Server is running")});