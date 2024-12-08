
// Using Built-in Middleware in Express
// a. express.json() (For parsing JSON request bodies)
//       This middleware automatically parses JSON data sent in the request body and makes it available in req.body.
// b. express.static() (For serving static files)
//         You can use express.static() to serve files like images, CSS, and JavaScript.

const express = require('express');
const app = express()

app.use(express.json()) // parse JSON data
// app.use(express.static('public')); Serve static files from the "public" folder


app.post('/add', (req, res) =>{
    const {name , age} = req.body;
    res.send(`Recieved : ${name} , ${age}`)

})

app.listen(3000, (req, res) => {
    console.log('server is running at 3000')
})