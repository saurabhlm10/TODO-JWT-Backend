const User = require("../models/userModel");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// const auth = require('../middleware/auth')

const {homeRoute} = require('./authControllers/home')
exports.home = homeRoute


const {registerRoute} = require('./authControllers/register')
exports.register = registerRoute

const {loginRoute} = require('./authControllers/login')
exports.login = loginRoute

const {createTodoRoute} = require('./todoControllers/createTodo')
exports.createTodo = createTodoRoute

const {getTodosRoute} = require('./todoControllers/getTodos')
exports.getTodos = getTodosRoute

const {getTodoRoute} = require('./todoControllers/getTodo')
exports.getTodo = getTodoRoute

const {editTodoRoute} = require('./todoControllers/editTodo')
exports.editTodo = editTodoRoute

const {deleteTodoRoute} = require('./todoControllers/deleteTodo')
exports.deleteTodo = deleteTodoRoute

const {searchTodoRoute} = require('./todoControllers/searchTodo')
exports.searchTodo = searchTodoRoute

