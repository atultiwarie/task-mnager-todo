const express = require("express")
const app = express()
const cors= require("cors")
const taskRoutes = require("./routes/task.routes")


// cors
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://task-mnager-todo.vercel.app/",
      "https://to-do.atultiwari.me/",
    ],
  }),
);

// middleware
app.use(express.json())

// routes
app.get("/",(req,res)=>{
    res.send("task-manager-api")
})

app.use("/api/tasks", taskRoutes)



module.exports = app