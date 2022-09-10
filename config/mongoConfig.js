const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL)
    .then((response) => {
        console.log("MongoDB is connected")
    })
    .catch((error) => {
        console.log('Error connecting MongoDB')
    })

