const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Kanchan123@cluster0.egrv0vs.mongodb.net/")

// const todo_schema = mongoose.Schema({
// title: String,
// description: String,
// completed: Boolean

// })
const todo_schema = mongoose.Schema({
    task: String,
    isDone: Boolean
  
    
    })

const todo = mongoose.model('Todo_List',todo_schema);

module.exports={
    todo    
}