// Error handlign using HTTP status code
import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
app.use(cors);
app.use(bodyParser.json());

const PORT = 4000;


app.post('/users', (req, res) => {
    const {id, name , email} = req.body
    if(!id || !name || !email){
        return res.status(400).json({ error : 'All fields are Required'})
    }

    //stimulate user creation

    res.status(201).json({message : 'User created successfully'})
})
  
// here is when the the resource is not found or 404
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ error: 'User not found!' });
    }
    res.json(user);
  });


  
  app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`)
  })