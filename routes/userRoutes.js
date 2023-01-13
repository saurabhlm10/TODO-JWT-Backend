const express = require('express')

const router = express.Router()

const {home, register, login, createTodo, getTodos, getTodo, editTodo, deleteTodo, searchTodo} = require('../controllers/userControllers')

const auth = require('../middleware/auth')

router.get('/', home)
router.post('/auth/register', register)
router.post('/auth/login', login)

router.post('/api/createtodo/:userId', auth, createTodo)
router.get('/api/gettodos/:userId', auth, getTodos)
router.get('/api/gettodo/:userId/:todoId', auth, getTodo)
router.put('/api/edittodo/:todoId', auth, editTodo)
router.delete('/api/deletetodo/:todoId', auth, deleteTodo)
router.get('/api/searchtodo/:userId/:searchTerm', auth, searchTodo)


module.exports = router