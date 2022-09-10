require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyparser = require('body-parser');
require('./config/mongoConfig');
const route = require('./router/movie.router')

app.use(bodyparser.urlencoded())
app.use(bodyparser.json())

app.use(route);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})