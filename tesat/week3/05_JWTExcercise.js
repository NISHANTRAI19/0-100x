const express= require("express");
const zod=require("zod");
const jwt=require("jsonwebtoken");

const app=express();
const jwtPassword="secret";

const USERS=[
    {
        username:"nishant@gmail.com",
        password:"1243"
    },
    {
        username:"bugabuga@gmail.com",
        password:"124"
    }]

app.use(express.json());

function createToken(userName){
    try{
    const res=jwt.sign({userName:userName},jwtPassword);
    return res;}
    catch(err){

        console.log(err);
        return;
    }

}
function verifyToken(token){

    try{
    jwt.verify(token,jwtPassword)
        return true;
}
    catch(error){
        return false;
    }
    
}


function validator(userName,password){
    const myschema= zod.string().email();
    const emailRes=myschema.safeParse(userName);
    if(!emailRes.success) return false;
    if(!password ||password.length===0) return false;
    return true;
}
function isUserPresent(userName, password){
    const user = USERS.find((elem) => elem.username === userName && elem.password === password);

    return user !== undefined


}
app.post("/signin", (req, res) => {
    const userName = req.body.username; 
    const password = req.body.password;

    console.log("Received request with:", userName, password);

    const isValid = validator(userName, password);
    console.log("Validation result:", isValid);

    const userStatus = isUserPresent(userName, password);
    console.log("User status:", userStatus);

    if (!isValid || !userStatus) {
        return res.status(403).json({ msg: "Invalid email/password" });
    }

    res.status(200).json({ token: createToken(userName) });
});


app.get("/users",(req,res)=>{

    
if(verifyToken(req.headers.token))
res.status(200).send(USERS);
else
res.status(403).json({msg:"invalid token"})
});


app.use((err,req,res,next)=>{
    console.log("hiii")
    console.log("oopssiee");
    next();

})


app.listen(3000, ()=>console.log("running"));