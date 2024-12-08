/*
    Basic Authentication with Middleware
    a. Concept of Authentication
      Authentication verifies the identity of a user, often using credentials like a username and password.
    b. Custom Authentication Middleware
       Here’s how you can implement basic authentication in Express.
*/
const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())
 
//create middleware 
const authenticate = (req, res, next) => {
    const { authorization } = req.headers;
  
    if (!authorization || authorization !== 'Bearer mySecretToken') {
      return res.status(401).json({ error: 'Unauthorized!' });
    }
  
    next(); // Proceed to the next middleware or route
  };

  //applying middleware to protected middleware
  app.get('/protected', authenticate, (req, res) => {
    res.send('You have accessed a protected route!');
  });

  const PORT = 4000;

  app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`)
  })