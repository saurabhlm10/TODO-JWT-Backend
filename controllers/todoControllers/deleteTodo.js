const { User } = require("../../models/userModel");
const { Todo } = require("../../models/userModel");

exports.deleteTodoRoute = async (req, res) => {
  try {
    const { todoId } = req.params;



    const user = await Todo.findByIdAndDelete(todoId);

    res.status(201).json({
      success: true,
      message: "Todo deleted successfully",
      // updatedUser,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Todo not updated",
    });
  }
};
