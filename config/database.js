const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL

exports.connectToDB = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log('DB CONNECTED SUCCESSFULLY'))
    .catch((e) => {
        console.log('DB CONNECTION FAILED');
        console.log(e.message)
        process.exit(1)
    })
}