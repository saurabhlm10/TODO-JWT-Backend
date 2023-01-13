const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  todo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "todo",
  }],
  token: {
    type: String,
  },
});

const todoSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  title: {
    type: String,
    require: [true, "Title is required"],
    trim: true,
  },
  tasks: [{ type: String }],
});

todoSchema.set("timestamps", true);

// module.exports = mongoose.model("todo", todoSchema);

// module.exports = mongoose.model("user", userSchema);

Todo = mongoose.model("todo", todoSchema);

User = mongoose.model("user", userSchema);

module.exports = {User, Todo}