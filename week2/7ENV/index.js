/*Using Environment Variables for Security
a. Why Use Environment Variables?
    Hardcoding sensitive data (e.g., tokens, database credentials) is insecure. Use .env files to manage such data.
b. Install dotenv
    npm install dotenv
c. Create a .env File
     SECRET_TOKEN=mySecretToken
d. Load .env File in Your App as follow
    require('dotenv').config();
*/
const express = require('express')
const cors = require('cors');
require('dotenv').config()

const app  = express();
app.use(cors())

const PORT = process.env.PORT;

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization !== `Bearer ${process.env.SECRET_TOKEN}`) {
    return res.status(401).json({ error: 'Unauthorized!' });
  }

  next();
};



app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`)
})