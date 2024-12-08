// This is an assigment or practice of the whole of week2
const express = require('express');
const app = express()

const logRequest = (req, res, next) => {
    res.send(`Request Recieved : ${req.method} ${req.url}`)
   next();

}

const checkAuth = (req, res , next) => {
    if(req.headers['authorization']){
        next() // means that user is authorixed pass to the next middleware or route handler
    }

    else{
        res.status(201).send('unauthorized')
    }
}
app.use(logRequest) //applaying the middleware globally

const PORT = 8080;

app.get('/fetchUser', (req, res, checkAuth) => {
    res.send('user is autorized')
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`)
    
})

