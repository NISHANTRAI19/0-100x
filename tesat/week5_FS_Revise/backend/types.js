const zod= require("zod");

const createTodoSchema=zod.object({
    Objective:zod.string(),
    description:zod.string(),
    
});

const updateTodoSchema = zod.object({
    id:zod.string(),
})

module.exports({
    createTodoSchema,
    updateTodoSchema
})