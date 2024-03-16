const express = require("express");
const {create_todo_schema, update_todo_schema}= require("./types");
const {todo}= require("./db");
const cors=require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req, res){
const createpayload= req.body;
const parsedpayload = create_todo_schema.safeParse(createpayload);
if(!parsedpayload.success){
res.status(411).json({
    msg:"Wrong inputs"
})
return;
}
await todo.create({
    task:createpayload.task,
    isDone:false
})
//  await todo.create({
//     title:createpayload.title,
//     description:createpayload.description,
//     completed:false
// })
res.json({
    msg: "To-Do Created"
})



})

app.get("/gettodo",async function(req,res){
const todos= await todo.find({})
console.log(todos)

res.json({
    todos
})

})
app.put("/completed",async function(req, res){
const updatepayload = req.body;
const parsedpayload = update_todo_schema.safeParse(updatepayload);

if(!parsedpayload.success){
    res.status(411).json({
        msg: "Wrong Inputs"
    })
    return;
}

await todo.update({
_id:mongodb.ObjectId(req.body._id)
},
{
isDone: true
})
res.json({
    msg: "To-DO updated"
})

})


app.delete("/cleardata",async function(req, res){
    const todos= await todo.find({})
    console.log(todos)
    
    await todo.deleteMany({})
 
    res.json({
        msg: "All are marked as completed"
    })
    
    })





app.listen(1000);