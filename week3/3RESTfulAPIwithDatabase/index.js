import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser  from 'body-parser';
import cors from 'cors';
import productsRoute from './Routes/productRoute.js';

const app = express();

//middleware to parse the json body
app.use(express.json());
// app.use(bodyParser.json())

app.use(cors())

//acccessing the enviromental variables
dotenv.config()
const PORT = process.env.PORT || 7000;
const MongoURL = process.env.MONGO_URL;

//conncet the database
mongoose.connect(MongoURL)
.then(() => console.log('Database connected successfully'))
.catch(error => console.log('Error: Database connection failed'))

app.use('/products', productsRoute)

app.listen(PORT, () =>{
    console.log(`Server is running at port ${PORT}`)
});
