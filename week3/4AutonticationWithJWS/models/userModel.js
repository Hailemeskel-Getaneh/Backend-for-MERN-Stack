import mongoose, { model } from 'mongoose';
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash the password before saving
// NB. use standard function instead of arrow function because it needs the this keyword
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
