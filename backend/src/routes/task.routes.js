const express= require("express")
const taskRouter= express.Router()
const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
}= require("../controllers/task.controller")


// create task
taskRouter.post("/",createTask)

// get all tasks
taskRouter.get("/",getAllTasks)

// get task by id
taskRouter.get("/:id",getTaskById)

// update task
taskRouter.put("/:id",updateTask)

// delete task
taskRouter.delete("/:id",deleteTask)


module.exports= taskRouter