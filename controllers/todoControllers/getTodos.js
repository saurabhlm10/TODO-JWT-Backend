const {User} = require("../../models/userModel");
const {Todo} = require("../../models/userModel");


exports.getTodosRoute = async (req, res) => {
    try {

        const { userId } = req.params

        const todos = await Todo.find({userId})

        res.status(201).json({
            success: true,
            message: 'Fetched todos successfully',
            todos
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Did not Fetch todos successfully',
        })
    }
}