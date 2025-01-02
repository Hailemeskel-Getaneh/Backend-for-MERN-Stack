import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config()

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4030; // use 4030 as a choice if the env port is in use
const MongoURL = process.env.MONGO_URL;

mongoose.connect(MongoURL)
.then(() => console.log('Mongo db connected succefully \n \n'))
.catch((err) => {console.log('Something wrong happens here')});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

//create a schema
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:{type:String, unique:true},
    createdAt:{
        type:Date,
        default:Date.now
    }
});

 const userModel = mongoose.model('User', userSchema);

 // let us get or fetch the users from the database using get method
 app.get('/users', async (req, res) => {
    try {
      const userData = await userModel.find();
      res.json(userData);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching users' });
    }
  });

  // post a user the database

  app.post('/users', async (req, res) => {
    try {
      const { name, age, email } = req.body;
      const newUser = new userModel({ name, age, email });
      await newUser.save();
      res.status(201).json({ message: 'User saved successfully' });
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).json({ error: 'Email already exists' });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  });
  

//another Method

/* you can create or post a user in the user model directly as follow instead of post

const newUser = new userModel({
    name:'Nolawi Hailemeskel',
    age:5,
    email:"nolawihailemeskel@gmail.com"
});

Then save the user into the database
newUser.save()
.then(() => console.log('user save successfully'))
.catch ((req, res, error) => {
    console.log('Something happens')
  });

*/

// let us create another schema and model and then post and get users

const studentsSchema = new mongoose.Schema({
        name:String,
        department:String
    })

    const studentsModel = mongoose.model('students', studentsSchema)

    app.get('/students', async(req, res) =>{
        try{
            const students = await studentsModel.find();
            res.json(students)
        }
        catch(error){
            res.status(500).json({error:"Error in fething the students"})
        }
       
    })

    app.post('/students', async(req, res) =>{
        try{
            const {name, department} = req.body;
            const newStudent = new studentsModel({
                name,
                department
            })

            await newStudent.save();
            res.status(201).json({message:'user created successfully'})
        }
    catch(error){
        if(error.code === 11000){
            res.status(400).json({error:"email already exists"})
        }
        else{
            res.status(500).json({error:"Internal server error"})
        }
    }})