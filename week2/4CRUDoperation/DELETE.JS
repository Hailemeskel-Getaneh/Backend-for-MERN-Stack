const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json())

app.get('/users/:id', (req, res) =>{
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id))

    if(userIndex === -1){
        return res.status(400).send('userId is not found')
    }
    users.splice(findIndex, 1) // delete a user from the users list
    res.send('User deleted successfully')
})


const PORT = 7000;

app.listen(PORT, (req, res) => {
console.log(`Server is running at ${PORT}`)
})