const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
  }
}
);

const taskModel = mongoose.model("tasks", taskSchema)
module.exports = taskModel;