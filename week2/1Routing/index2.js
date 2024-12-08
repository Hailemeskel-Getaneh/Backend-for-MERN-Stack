// Dynamic routing with parameters
// Dynamic routes use  :(colon) to define placeholders in the URL, which can capture data from the URL itself.
const express = require('express')

app = express()

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User Id: ${userId}`)
})

app.listen(3000, (req, res) => {
    console.log('Server is running at port 3000')
})