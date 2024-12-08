/*Using a Validation Library
        For robust validation, use libraries like Joi or express-validator.

        Install express-validator
        npm install express-validator
*/

const express = require('express');
const cors = require('express');

const app = express();

const { query, validationResult } = require('express-validator');

app.get( '/search',
  query('query').isLength({ min: 3 }).withMessage('Query must be at least 3 characters long'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send(`Search Query: ${req.query.query}`);
  }
);




const PORT = 4080;
app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`)
})