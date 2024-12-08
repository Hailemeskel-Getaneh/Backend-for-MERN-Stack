import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import usersRoute from './routes/authRoute.js';


const app = express()
app.use(cors())
app.use(bodyParser.json())

dotenv.config()

const PORT = process.env.PORT;
const MONGO_URL = process.env.mongo_url;

//conncet the database

mongoose.connect(MONGO_URL)
.then(() => console.log('Database connected successfully'))
.catch((err) => {
    console.log(`Error : database conncetion failed`)
})

app.use('/auth', usersRoute)
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
