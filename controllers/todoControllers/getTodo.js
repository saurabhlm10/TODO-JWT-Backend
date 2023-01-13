const {User} = require("../../models/userModel");
const {Todo} = require("../../models/userModel");


exports.getTodoRoute = async (req, res) => {
    try {
        const { userId, todoId } = req.params

        const todo = await Todo.findById(todoId)

        res.status(201).json({
            success: true,
            message: 'Fetched todos successfully',
            todo
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Did not Fetch todos successfully',
        })
    }
}