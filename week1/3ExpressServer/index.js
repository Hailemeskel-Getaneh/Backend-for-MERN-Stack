//creating server with express which is a popular web framework of node js
const express = require('express');

const app = express()

const PORT = 3000;


app.get('/', (req, res) =>{
    res.send('Martiye , I love you too much 💖💐👩‍❤️‍👩')

})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})

