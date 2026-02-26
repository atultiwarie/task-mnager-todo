const express = require("express")
const app = express()
const cors= require("cors")
const taskRoutes = require("./routes/task.routes")


// cors
app.use(cors({
    origin:[
        "http://localhost:5173"
    ]
}))

// middleware
app.use(express.json())

// routes
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/api/tasks", taskRoutes)



module.exports = app