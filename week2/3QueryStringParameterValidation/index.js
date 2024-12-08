/* Handling Query Strings
        Query strings are key-value pairs sent in the URL after the question mark or this ?. 
        They are used to pass small amounts of data to the server.

        Example
        http://localhost:3000/search?query=express&sort=asc

        query=express and sort=asc are the query strings.
        Accessing Query Strings in Express
        Express provides req.query to access query strings.
*/
const express = require('express')
const app = express()

app.get('/search', (req, res) => {
    const {query, sort} = req.query ; //destructuring query strings

     res.send(`Searching for : ${query} \n sorting order: ${sort}`)

})

const PORT = 5050;

app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`)
})
