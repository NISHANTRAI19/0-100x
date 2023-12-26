const jwt =require("jsonwebtoken");
const jwtPassword="pass";

function createToken(username,password){
    const res= jwt.sign({username},jwtPassword);
    console.log(res);
    return res;
}

const token=createToken("nishant","pass");
try{
function decodeToken(token){
    const data=jwt.decode(token);
    console.log(data);


}

function verifyToken(token){
    const data= jwt.verify(token,jwtPassword);
    console.log("VErifing")
    console.log(data);
}
}
catch(err){
    console.log(err)
}
decodeToken(token);
verifyToken(token);