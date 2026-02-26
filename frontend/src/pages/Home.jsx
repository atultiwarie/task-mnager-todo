import React, { useEffect } from 'react'
import TaskList from '../components/TaskList'
import { useState } from 'react'
import { getTasks, deleteTask } from "../services/api";
import {  useNavigate } from"react-router-dom";
import FilterButtons from '../components/FilterButtons';
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();


  const getAllTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data.tasks);
      
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
    
  }
  useEffect(()=>{
    getAllTasks();
  },[])

  const deleteTaskById = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?",
    );
    if (!confirmDelete) return;

    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);



  return (
    <div className="p-4 w-full max-w-4xl mx-auto">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors mb-4" onClick={()=> navigate("/create")}>
        Create New Task
      </button>
      <FilterButtons filter={filter} setFilter={setFilter} />
    <TaskList tasks={filteredTasks} deleteTaskById={deleteTaskById} />
    </div>
  )
}

export default Home