const express= require("express");
const app= express();

const {createTodoSchema,updateTodoSchema}= require("./types")

app.use(express.json());

app.get("/todos",(req,res)=>{
    

})

app.post("/todo",(req,res)=>{
    const bodyPayload= req.body;
    const parsedPayload=createTodoSchema.safeParse(bodyPayload);

    if(!parsedPayload.success){
        return res.status(403).json({msg:"wrong inputs"});
    }
    
    
    //DB operations
});

app.put("/completed",()=>{

})

app.use((err,req,res,next)=>{
    if(err) {
        console.log(err);
         res.status(403).json({msg:"some Error "});
        return;
    }
    next();

});
app.listen(3000,()=>{console.log("running")})