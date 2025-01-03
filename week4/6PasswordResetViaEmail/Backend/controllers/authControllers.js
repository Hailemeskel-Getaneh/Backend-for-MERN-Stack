import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import User from '../models/user.js';

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Add your email
    pass: process.env.EMAIL_PASSWORD, // Add your email password
  },
});

// Request Password Reset
export const requestReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });

    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Password Reset Request',
      text: `Click the link to reset your password: ${resetLink}`,
    });

    res.status(200).json({ message: 'Reset link sent to email.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.findByIdAndUpdate(decoded.id, { password: hashedPassword });

    res.status(200).json({ message: 'Password updated successfully.' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token.' });
  }
};
