const taskModel = require("../models/taskModel")

// create task
exports.createTask = async (req,res) => {
    try {
        const {title,description}= req.body

        if (!title || title.trim() === "") {
            return res.status(400).json({ message: "Title is required" });
        }
        
        const newTask = await taskModel.create({
            title,
            description,
        })

        res.status(201).json({
            message:"Task created successfully",
            task: newTask
        })
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"Server Error"})
        
    }
}

// get all tasks
exports.getAllTasks = async (req,res) => {
    try {
        const tasks = await taskModel.find().sort({createdAt:-1})

        if (!tasks.length) {
          return res.status(404).json({ message: "No tasks found" });
        }

        res.status(200).json({
            message:"Tasks retrieved successfully",
            tasks
        })
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"Server Error"})
        
    }
}

// get task by id
exports.getTaskById = async (req,res) => {
    try {
        const {id}= req.params

        const task = await taskModel.findById(id)

        if(!task){
            return res.status(404).json({message:"Task not found"})
        }
        res.status(200).json({
            message:"Task retrieved successfully",
            task
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"Server Error"})
    }
}

// update task
exports.updateTask = async (req,res) => {
    try {
        const {id}= req.params
        const {title,description,status}= req.body
        const task = await taskModel.findByIdAndUpdate(id,{
            title,
            description,
            status
        },{new:true}) 

        if(!task){
            return res.status(404).json({message:"Task not found"})
        }
        res.status(200).json({
            message:"Task updated successfully",
            task
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"Server Error"})
    }
}

// delete task
exports.deleteTask = async (req,res) => {
    try {
        const {id}= req.params
        const task = await taskModel.findByIdAndDelete(id)

        if(!task){
            return res.status(404).json({message:"Task not found"})
        }   
        res.status(200).json({
            message:"Task deleted successfully",
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"Server Error"})
    }
}