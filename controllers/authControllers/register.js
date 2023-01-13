const {User} = require("../../models/userModel");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

exports.registerRoute = async (req, res) => {
    try {
      // collect all information
      const { firstName, lastName, email, password } = req.body;
  
      // Check if all fields are provided
      if (!(firstName && lastName && email && password)) {
        return res.status(401).send("All Fields Are Required");
      }
  
      // check if user already exists or not
      const userAlreadyExists = await User.findOne({ email });
      if (userAlreadyExists) {
        // throw new Error("User Already Exists")
        return res.status(402).send("User Already Exists");
      }
  
      // encrypt password
      const myEnPassword = await bcrypt.hash(password, 10);
  
      // create a new entry in db
      const user = await User.create({
        firstname: firstName,
        lastname: lastName,
        email,
        password: myEnPassword,
      });
  
      // create token and send it to user
      const token = jwt.sign(
        {
          id: user._id,
          email,
        },
        process.env.SECRET,
        { expiresIn: "2h" }
      );
  
      user.token = token;
  
      // dont want to send user to frontend
      user.password = undefined;
  
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      console.log("Error in response route");
    }
  };