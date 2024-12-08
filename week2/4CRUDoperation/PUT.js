//This route method updates the given content

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json())

let users = [{name:'Hailemsekel' ,id:1501246}, {name:'Martiye', id:1601334}, {name:'Nolawi Hailemeskel', id:3}]

app.put('users/:id', (req, res) => {

    // const ID = req.params.id
    const user = user.find(u => u.id == parseInt(req.params.id))
    

    if(!user){
        res.status(404).send('user no found')
    }
    const {name, id} = req.body
    if(name) user.name = name;
    if(id) user.id = id;
})

const PORT = 5050;

app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`);
    
})