# Task Manager (MERN Stack)
---

## 🛠 Tech Stack

- **Frontend:** React (Vite) + Tailwind CSS  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  
- **API:** REST API  

---

##  Features

- Create new tasks  
- View all tasks  
- Update tasks  
- Delete tasks (with confirmation)  
- Mark tasks as Completed / Pending  
- Filter tasks (All / Pending / Completed)

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
```

---

## ⚙️ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside backend:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Start backend server:

```bash
npm run dev
```

Backend runs on: http://localhost:3000

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on : http://localhost:5173

---

## 🌍 Live Demo

Frontend:https://your-frontend-link  

Backend API:https://your-backend-link  

---

## 🔄 Functionality Flow

- Home page displays all tasks  
- Filter buttons allow viewing Pending or Completed tasks  
- Edit and Delete options available for each task  
- Create page allows adding new tasks  

---

## 🚀 Future Improvements

- Fix the Pendind Button Functionality 

---

