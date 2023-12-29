const mongoose= require("mongoose");
const {mongoDBLink}=require("./00_constants");
try{
mongoose.connect(mongoDBLink);

const User= mongoose.model('Users',{name:String,email:String,password:String});


const existingUser =User.findOne({email:"rai7nishant@gmail.com"})
console.log(existingUser)
// if (!existingUser){
// const user=new User({
//     name:"Nishant Rai",
//     email:"rai7nishant@gmail.com",
//     password:"1234qwe"
// });
// user.save();}else console.log("user already exists")}}
}
catch(error)
{console.log(error);
}