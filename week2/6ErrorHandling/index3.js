// Custom Error Classes
// Creating custom error classes can make error handling more descriptive.

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())

// Example: Custom Error Class

class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
// Using Custom Errors

app.get('/demo', (req, res, next) => {
  try {
    throw new AppError('Custom error occurred!', 400);
  } catch (error) {
    next(error);
  }
});
// 4. Global Error Middleware 

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    status,
    message: err.message || 'Internal Server Error',
  });
});

const PORT = 8080;

app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`)
})