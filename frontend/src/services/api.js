import axios from 'axios';

const api = axios.create({
    baseURL : import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
})

// create task
export const createTask = (data)=> api.post('/tasks', data);

// get all tasks
export const getTasks = ()=> api.get("/tasks");

// get task by id
export const getTaskById = (id)=> api.get(`/tasks/${id}`)

// update task
export const updateTask = (id, data)=> api.put(`/tasks/${id}`, data);

// delete task
export const deleteTask = (id)=> api.delete(`/tasks/${id}`);