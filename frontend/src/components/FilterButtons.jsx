const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-3 mb-4">
      <button
        onClick={() => setFilter("All")}
        className={`px-4 py-2 rounded-lg transition ${
          filter === "All"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-4 py-2 rounded-lg transition ${
          filter === "pending"
            ? "bg-yellow-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 rounded-lg transition ${
          filter === "completed"
            ? "bg-green-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
