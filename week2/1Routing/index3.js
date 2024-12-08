// 3. Route Chaining for Modular Code
// You can use .route() to group routes with the same path but different methods

const express = require('express')

const app = express()
app.route('/book')
.get( (req, res) => {
    res.send('Get all the books')
} )
.post((req, res) => {
    res.send('Add  a new book')
})
.delete((req, res) => {
    res.send('Delete a book')
})

//here all the methods are done at one end point which is /book



app.listen(4000, (req, res) => {
    console.log('Server is Running at 4000')
})