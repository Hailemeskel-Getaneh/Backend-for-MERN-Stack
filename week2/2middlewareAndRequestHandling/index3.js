// next() Function
// The next() function is used to pass control to the next middleware function.
//  If you do not call next(), the request will be left hanging and the response will not be sent back to the client.

// Example: Skipping Middleware
// Sometimes, you may want to skip certain middleware functions based on a condition, such as an authentication check:
const express = require('express')
const app = express()



const checkAuth = (req, res, next) => {
    if (req.headers['authorization']) {
      next(); // User is authenticated, proceed to next middleware or route handler
    } else {
      res.status(401).send('Unauthorized');
    }
  };
  
  
app.use(checkAuth); // Apply globally or use for specific routes


app.listen(5000, (req, res) => {
    console.log(`Server is running at 5000`)
})