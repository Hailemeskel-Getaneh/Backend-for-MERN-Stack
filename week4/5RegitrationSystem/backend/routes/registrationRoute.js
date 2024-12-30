import User from '../models/registrationModel.js'
import express from 'express';

const router = express.Router();

// Get all users
router.get('/user', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
  });

router.post('/user', async(req, res) =>{

    const {name, email, password} = req.body;

    const newUser = new User({
        name, email, password
    })

    try{
        await newUser.save();
        // alert('registration successfull')
        res.status(201).json({message:"user registerd successfuly"});
    }
    catch(err){
        console.error("Error creating a user", err)
        res.status(500).json({message:"Error creating a user", err})
    }

})

export default router