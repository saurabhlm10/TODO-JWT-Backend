const {User} = require("../../models/userModel");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

exports.loginRoute = async(req, res) => { 
    try {
        // collect info 
        const {email, password} = req.body

        // validate
        if(!(email && password)){
            res.status(401).send('email and password is required')
        }

        // check if user exists
        const user = await User.findOne({email})

        // match the password
        if(user && (await bcrypt.compare(password, user.password))){
            // create token and send cookie
            const token = jwt.sign(
                {
                    id: user._id,
                    email
                },
                process.env.SECRET,
                {
                    expiresIn: '2h'
                }
            )

            user.password = undefined

            user.token = token

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }

            return res.status(200).cookie('token', token, options).json({
                success: true,
                token,
                user
            })
            //  res.status(200).json({
            //     success: true,
            //     token,
            //     user
            // })
        }

        res.status(400).send('email or password is incorrect')

    } catch (error) {
        console.log(error)
    }
}