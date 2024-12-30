import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import registrationRoutes from './routes/registrationRoute.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


const MONGOURL = process.env.MONGOURL;
const PORT = process.env.PORT

mongoose.connect(MONGOURL)
.then(() => console.log("Database connectted successfully"))
.catch(err => console.log('Database connection error', err))

app.use('/api', registrationRoutes)


app.listen(PORT , ()=>{
    console.log(`Server is running at port ${PORT}`)
})