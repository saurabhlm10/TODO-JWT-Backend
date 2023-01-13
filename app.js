require("dotenv").config();
require('./config/database').connectToDB()
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors());


const userRoutes = require('./routes/userRoutes')

app.use('/', userRoutes)

module.exports = app;
