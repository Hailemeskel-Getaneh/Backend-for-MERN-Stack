const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
app.use(cors())
app.use(bodyParser.json());

let users = [{name:'Hailemsekel' ,id:1501246}, {name:'Martiye', id:1601334}, {name:'Nolawi Hailemeskel', id:3}]


//Get a specific user by id
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))

    if(!user){
        res.status(404).send('User not found')
    }
    res.json(user)
})

const PORT = 3001;

app.listen(PORT, (req, res) => {
    console.log(`Server is runnign at ${PORT}`);
    
})