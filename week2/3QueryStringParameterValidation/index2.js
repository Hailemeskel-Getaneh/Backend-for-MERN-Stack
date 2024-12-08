// Handling URL Parameters
// URL parameters are dynamic segments of a route, defined using :.
//  They allow flexible routes that can handle different inputs.

// Example
// http://localhost:3000/users/123

// 123 is a dynamic parameter.
// Defining Routes with URL Parameters
// Express allows you to define routes with parameters using a colon (:).

const express = require('express');

const app = express();


app.get('/search/:id', (req, res) => {
    const userId = req.params.id ;
    res.send(`User Id : ${userId}`)
})

app.listen(3030, (req, res) => {

    console.log('Server is running at 3030')
})