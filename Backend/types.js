const zod = require("zod");

const create_todo_schema = zod.object({
task: zod.string(),
isDone:zod.boolean()


})

const update_todo_schema = zod.object({
    _id: zod.string(),
   
    })

    module.exports={
        create_todo_schema: create_todo_schema,
        update_todo_schema: update_todo_schema
    }