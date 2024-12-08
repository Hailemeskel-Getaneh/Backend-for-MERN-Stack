// Handling Combined Query Strings and URL Parameters
// You can combine query strings and URL parameters to make requests more flexible.

// Example
// http://localhost:3000/users/123/orders?status=delivered

const express = require('express');
const app = express();

app.get('/user/:id/orders', (req, res) =>{
    const userId = req.params.id ;
    const {status} = req.query;

    res.send(`ID : ${userId} , orders Status : ${status}`)
})

const PORT = 4040;
app.listen(PORT, (req, res) =>{
    console.log(`Server is running at ${PORT}`)
})