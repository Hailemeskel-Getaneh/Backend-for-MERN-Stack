const express = require('express')

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
 
    res.send('Welcome to the Homepage')
})

app.get('/about', (req, res) => {
    res.send('About Us')
})

//let us discuss the four  router methods
app.get('/hello' ,(req, res) => {
    res.send('Hello World')
})

app.post('/submit', (req, res)=>{
    res.send('Form submitted Successfully')
})

app.put('/update', (req, res) => {
    res.send('Updated successfully')
})

app.delete('/remove', (req, res)=> {
    res.send('Delated successfully')
})

app.listen(PORT, () => { 
    console.log(`Server is running at ${PORT}`)
})