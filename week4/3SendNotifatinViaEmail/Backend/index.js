import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer'


const app = express()
app.use(cors());




const PORT = 4000;
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (like your React build)

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})