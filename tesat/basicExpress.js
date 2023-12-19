const users=[{
    name:"bear",
    kidneys:[
        {
        healthy:false},
        {
            healthy:true}
        ],

    }]
const express =require("express");
const app=express();

app.get("/",(req,res)=>{
    const bearKidneys=users[0].kidneys;
    const healthyKidneys= bearKidneys.filter(elem=>elem.healthy==true);
    const totalNoOfHealthyKidneys=bearKidneys.length-healthyKidneys.length;

    const totalNoOfKidneys=bearKidneys.length;
     
    res.json({
        totalNoOfHealthyKidneys,
        totalNoOfKidneys,
        numberOfUnhealthyKidneys:totalNoOfKidneys-totalNoOfHealthyKidneys,

        
    })
})

app.post("/",(req,res)=>{

})

app.put("/",(req,res)=>{

})

app.delete("/",(req,res)=>{

})

app.listen(3000,()=>console.log("runninng"));