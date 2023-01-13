const {User} = require("../../models/userModel");
const {Todo} = require("../../models/userModel");
 

exports.createTodoRoute = async(req, res) => {
    try {
        const { userId, title, tasks } =req.body

        if(!title || !tasks){
            throw new Error('Title and tasks are required')
        }

        // get user
        const user = await User.findById(userId)

        // Create Todo
        const newtodo = await Todo.create({userId, title, tasks})
        const newtodos = [...user.todo, newtodo] 

        // Add Todo to user
        const updatedUser = await User.findByIdAndUpdate(userId, {todo: newtodos})

        res.status(201).json({
            success: true,
            message: 'todo created successfully',
            updatedUser
        })
    
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'todo Not created ',
        })
    }
}