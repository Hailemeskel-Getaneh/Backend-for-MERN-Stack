//  Custom Middleware
// Custom middleware is a function that you create to handle requests. 
// It can perform tasks like logging, authentication, etc.

const express = require('express')

const app = express()

//applying global middleware which affects all routes
app.use((req, res, next) => {
    console.log('Global middleware');
    next();
  });

  // middleware for specific route
  app.get('/special', (req, res, next) => {
    console.log('Middleware for /special');
    next();
  }, (req, res) => {
    res.send('Hello from /special!');
  });
  
//custom middleware
const logRequest = (req, res, next) => {
    console.log(`Request Recieved : ${req.method} ${req.url}`)
    next() // pass control to the next middleware function or request handeler
}

app.use(logRequest) // apply middleware golobally or calling

// The order of calling a middleware matters for thier excution

app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = 4000;

app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`)
})