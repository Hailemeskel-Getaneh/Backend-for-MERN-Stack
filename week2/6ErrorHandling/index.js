/*
   Understanding Error Handling in Express
Errors can occur due to:
        Invalid user input.
        Server issues.
        Missing resources.
        Effective error handling ensures these are managed gracefully, 
        providing meaningful messages to users. 
*/

import express from 'express';
import cors from 'cors';
import bodyParser  from 'body-parser';

const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = 4000;

app.use((err, req ,res, next) => {
    console.error(err.stack); // log error details (useful for debugging)
    res.status(500).json({message : "Somethng went wrong"})
});

//   Throwing Errors in Routes
// You can throw errors manually to trigger the error-handling middleware.


app.get('/error-demo' , (req, res, next) => {
    const error = new error('This is a demo error!');
    error.status == 400 // attach a status code
    next(error); //pass the error to the error-handling middleware
})

// here is an  updated error middleware

app.use((err, req, res, next) => {
    const status = err.status || 500; // Default to 500 if status isn't set
    res.status(status).json({ error: err.message });
  });
  

app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`);
    
})

