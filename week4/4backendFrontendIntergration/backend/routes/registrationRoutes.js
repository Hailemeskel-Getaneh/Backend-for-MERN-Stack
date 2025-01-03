import express from 'express';
import Register from '../models/registrationModel.js'

const router = express.Router();


router.post('/register', async (req, res) => {
    const {name, email, password} = req.body

    try{

        const newUser = new Register({
            name, email, password
        })

        await newUser.save();

        res.statsu(201).json({message:"user registered successfully"})
    
    }

  catch(error){
    console.log("somehing went wrong");
    res.status(500).json({message:"error savin user"})
  }

});

export default router