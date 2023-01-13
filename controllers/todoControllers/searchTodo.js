const {User} = require("../../models/userModel");
const {Todo} = require("../../models/userModel");

exports.searchTodoRoute = async (req, res) => {
    try {
        const {userId, searchTerm} = req.params
 
        const searchResults = await Todo.find({
            $and: [
                {userId},
                {$or :  [{title: new RegExp(searchTerm, 'i')},{tasks: new RegExp(searchTerm, 'i')}]}
            ]
        })  

        res.status(201).json({
            success: true,
            message: 'searchResults fetched successfully',
            searchResults
        })

    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'searchResults not fetched',
        })

    }
}