import { useState } from "react";
import { createTask } from "../services/api";
import { Link, useNavigate } from "react-router-dom";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      setError("");
      setLoading(true); 
      await createTask({ title, description });
      setTitle("");
      setDescription("");
      alert("Task created successfully");
      navigate("/"); 
    } catch (err) {
      setError("Failed to create task");
      console.error(err);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">
          Create New Task
        </h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
          className="w-full border border-gray-600 bg-gray-700 text-gray-200 
                     p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />

        {/* Description */}
        <textarea
          rows="3"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={loading}
          className="w-full border border-gray-600 bg-gray-700 text-gray-200 
                     p-3 rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white 
                     py-3 rounded-lg font-medium transition-colors mb-3 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Add Task"}
        </button>

        <small className="p-2 text-sm underline">
          <Link to="/">Back to Home</Link>
        </small>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-sm mt-3 text-center">{error}</p>
        )}
      </form>
    </div>
  );
};

export default TaskForm;