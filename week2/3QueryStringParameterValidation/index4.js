/*
Input Validation
Validation ensures that data received from clients is correct and secure. You can validate:

URL parameters.
Query strings.
Request body data.
a. Manual Validation
You can manually validate inputs in your route handler.
*/

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;

    if(isNaN(userId)){
        res.status(400).send('Use Id is not valid')
    }

    res.send(`User id : ${userId}`)
})

const PORT = 4000;

app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`);
    
})