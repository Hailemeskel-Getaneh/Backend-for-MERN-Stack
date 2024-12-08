const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors()) // helps to handle cross origin requests 
app.use(bodyParser.json()) // helps to parse json request bodies

app.get('/middleware', (req, res) => {
    res.send('cors and body-parser are built in middlewares')
})



const PORT = 3000;
app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`)
})