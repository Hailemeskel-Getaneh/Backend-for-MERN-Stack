const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()

app.use(bodyParser.json()); //helps handle json request bodies
app.use(cors()) //helps to handle cross origin requets

let users = [];

app.post('/users', (req, res) => {
    const { id, name, email} = req.body;

    if(!id || !name || !email){
        return res.status(400).send('All fields are required')
    }
      users.push({id, name, email});
    res.status(201).send('user created succesfully')
})

const PORT = 3000;
app.listen(PORT, (req, res) =>{
console.log(`Server us running at ${PORT}`)
})