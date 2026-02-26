# 🚀 Task Manager (MERN Stack)

A full-stack Task Management application built using the MERN stack.

---

## 🛠 Tech Stack

- **Frontend:** React (Vite) + Tailwind CSS  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  
- **API:** REST API  

---

## ✨ Features

- ➕ Create new tasks  
- 📋 View all tasks  
- ✏️ Update tasks  
- 🗑 Delete tasks (with confirmation)  
- ✅ Mark tasks as Completed / Pending  
- 🔎 Filter tasks (All / Pending / Completed)

---

## 📂 Project Structure

```bash
task-manager/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx


Backend Setup

Navigate to backend : cd backend
Navigate to backend : cd backend

Create .env file:
PORT=3000
MONGO_URI=your_mongodb_connection_string

Start server: npm run dev

Frontend Setup

Navigate to frontend: cd frontend
Install dependencies : npm install
Start frontend : npm run dev

Frontend runs on : http://localhost:5173

Backend runs on : http://localhost:3000




Functionality Flow

Home page displays all tasks

Filter buttons allow viewing Pending or Completed tasks

Edit and Delete options available for each task

Create page allows adding new tasks

Future Improvements

Implement full Pending button
