const express= require("express");


function square(n){
    return n*n;

}

const app=express();

app.get('/',function (req,res){
    const number= req.query.n;
    res.send(square(number).toString());
})

app.listen(3000,function(){
console.log("running on 30000");
})