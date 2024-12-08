const express = require('express')      
const cors = require('cors')

const app = express()
app.use(cors());

app.get('/users/:id/search', (req, res) =>{
    const userId = req.params.id;
    const {category} = req.query;


    if(isNaN(userId)){
        res.status(400).send('User ID must be a number')
    }

    res.send(`User Id : ${userId}`)
    res.send(`Searching for ${category}`)
})


const PORT = 6000;

app.listen(PORT, (req, res) =>{
console.log(`Server is running at ${PORT}`);

})