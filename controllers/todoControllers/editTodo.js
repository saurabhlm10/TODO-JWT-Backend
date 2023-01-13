const {User} = require("../../models/userModel");
const {Todo} = require("../../models/userModel");

exports.editTodoRoute = async (req, res) => {
    try {

        const updatedTodo = await Todo.findByIdAndUpdate(req.params.todoId, req.body)

        res.status(201).json({
            success: true,
            message: 'Todo updated successfully',
            updatedTodo
        })
        
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Todo not updated',
        })
    }
}