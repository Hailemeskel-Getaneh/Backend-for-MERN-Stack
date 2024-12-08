// Using Multiple Middleware Functions
// You can apply multiple middleware functions to a route. Express will execute them in order.

const express = require('express');
const app = express()

app.use(express.json())
const authenticate = (req, res, next) => {
  // Some authentication logic
  next();
};

const logRequest = (req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
};

app.use(authenticate, logRequest); // Run both middleware before route handler

app.listen(6000, (req, res) => {
    console.log('Server is running at 6000')
})
