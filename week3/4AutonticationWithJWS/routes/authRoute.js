import express from 'express';
import userModel from '../../4AutonticationWithJWS/models/userModel.js';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router()
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

// create and post a new user
router.post('/', async (req, res) => {
    try{
        const {name, email, password} = req.body;

        //check wether the user exists or not
        const existingUser = await userModel.findOne({email})
        if(existingUser)
            res.status(400).json({message:'User already exists'})

        //create a new user
        const newUser = new userModel({
            name, email, password
        })
        //save the created user
        await newUser.save()
        res.status(200).json({message:"user registerd succesfully"})
    }
    catch(err){
        res.status(500).json({error:"server error"})
    }
})

//Login with authentication
router.post('/login', async (req, res) => {
    const { email, password} = req.body;

    try{
        const existingUser = await userModel.findOne({email});
        if(!existingUser)
            res.status(404).json({message:"user not found"})

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) 
            return res.status(401).json({ message: 'Invalid credentials' });
    
        const token = jwt.sign({ id: existingUser._id, email: existingUser.email }, SECRET_KEY, {
          expiresIn: '1h',
        });
        res.status(200).json({ token });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})

// module.exports = router;

export default router