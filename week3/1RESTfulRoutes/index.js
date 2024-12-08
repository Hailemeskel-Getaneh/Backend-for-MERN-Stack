// implementing a RESTful routes in express
const express = require('express');
const cors = require('cors');

const app = express()
app.use(express.json());

app.get('/users', (req, res) =>{
    res.send('Get all users')
});

app.get('/users/:id', (req, res) => {
    res.send(`get user with Id , ${req.params.id}`)
});

app.post('/users', (req, res) => {
    res.send('User created successfully')
});

app.put('/users/:id' , (req, res) =>{
    res.send(`user updated successfully`)
})

app.delete('/users/:id' ,(req, res) => {
    res.send(`User with id of ${req.params.id} Deleted successfully`)
})

const PORT = 3000;

app.listen(PORT, (req, res) =>{
    console.log(`Server is running at http://localhost:${PORT}`)
})