const mongoose= require("mongoose");

const {mongoDBLink}= require("./00_constants");
mongoose.connect(mongoDBLink);

const todoSchema =mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}