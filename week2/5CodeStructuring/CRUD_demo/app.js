const express = require('express')
const userRoute = require('./routes/usersRoute')

const app = express();
app.use(express.json())

app.use('/users ', userRoute)


const PORT = 4000;

app.listen(PORT, (req, res) =>{
console.log(`server is running at http://localhost:${PORT}`)
})