import { useNavigate } from "react-router-dom";


const TaskList = ({ tasks, deleteTaskById }) => {
    const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-200">All Task </h2>

      {tasks.length === 0 && (
        <p className="text-gray-400 text-center mt-10 italic">
          No tasks found. Create your first task!
        </p>
      )}
      

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-gray-800 border border-gray-700 
                       rounded-xl p-5 shadow-md 
                       hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-100">
                  {task.title}
                </h3>
                <p className="text-gray-300 text-xl mt-1">{task.description}</p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  task.status=== "completed"
                    ? "bg-green-600/20 text-green-400 "
                    : "bg-yellow-600/20 text-yellow-400"
                }`}
              >
                {task.status === "completed" ? "Completed" : "Pending"}
              </span>
            </div>

            <div className="flex justify-between items-center ">
              <span className="text-gray-500 text-xs">
                {new Date(task.createdAt).toLocaleDateString()}
              </span>

              <div className="flex gap-3">
                <button
                    onClick={() => navigate(`/update/${task._id}`)}
                  className="bg-blue-600 hover:bg-blue-700 
                             text-white px-4 py-1.5 rounded-lg 
                             text-sm transition-colors"
                >
                  Update
                </button>

                <button
                  className="bg-red-600 hover:bg-red-700 
                             text-white px-4 py-1.5 rounded-lg 
                             text-sm transition-colors"
                  onClick={() => deleteTaskById(task._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default TaskList;
