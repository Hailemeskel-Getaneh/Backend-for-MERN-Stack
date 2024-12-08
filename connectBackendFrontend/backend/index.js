
//This is the backend

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())

app.get('/users', (req, res) => {
res.send('This data is from the backend')
})

const PORT = 5000;

app.listen(PORT, (req, res) => {
console.log(`Server is running at ${PORT}`)
})