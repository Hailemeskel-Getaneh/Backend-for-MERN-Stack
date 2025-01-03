import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import registartionRoutes from '../backend/routes/registrationRoutes.js';

const app = express();

app.use(cors());
app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGOURL= process.env.MONGOURL;


mongoose.connect(MONGOURL)
.then(() => {
    console.log("Database Connected Successfully")
})

.catch(err => console.log("Database connection failed"))


app.use('/api', registartionRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})