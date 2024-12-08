const express = require('express')
const router = express.Router()

const app = express()

let users  = [];

app.get('/users', (req, res) => {
    res.send('Here are all of the users')
})
app.post('/user', (req, res) => {
    res.send('user added successfully')
})

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;

    const {name, email} = req.body;
    const user = users.find(u => u.id === parseInt(userId))

    if(!user){
        res.status(404).send('User is not found')
    }

    user.name = name;
    user.email = email;

    res.send('User updated successfully')
})

app.delete('/users/:id', (req, res) => {
    
const userIndex = users.findIndex(u => u.id === parseInt(req.params.id))
if(userIndex === -1){
    return res.status(404).send('user not found')
}

users.splice(userIndex, 1)
res.send('user delete sucessfully')
})

module.exports = router