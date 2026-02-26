import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getTaskById, updateTask } from "../services/api";

const UpdateTaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // loading state

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await getTaskById(id);
        setTitle(response.data.task.title);
        setDescription(response.data.task.description);
        setStatus(response.data.task.status);
      } catch (err) {
        console.error(err);
        setError("Failed to load task");
      }
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      setError("");
      setLoading(true); 
      await updateTask(id, { title, description, status });
      alert("Task updated successfully!");
      navigate("/"); 
    } catch (err) {
      console.error(err);
      setError("Failed to update task");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-100 text-center">
          Update Task
        </h2>

        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          disabled={loading}
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white border border-gray-600 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />

        {/* Description */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={3}
          disabled={loading}
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white border border-gray-600 
                     resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />

        {/* Status */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            disabled={loading}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Task"}
          </button>

          <Link
            to="/"
            className="text-center text-gray-300 hover:text-white underline"
          >
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateTaskForm;
