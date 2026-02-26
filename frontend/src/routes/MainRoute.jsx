import {Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import UpdateForm from "../components/UpdateForm";
import TaskForm from "../components/TaskForm";

const MainRoute = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<TaskForm />} />
        <Route path="/update/:id" element={<UpdateForm />} />
    </Routes>
}

export default MainRoute