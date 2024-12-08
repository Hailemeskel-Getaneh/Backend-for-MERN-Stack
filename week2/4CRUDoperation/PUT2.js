const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// PUT route to update user information
app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  console.log(`Updating user with ID: ${userId}`, updatedData);
  res.json({ message: `User ${userId} updated`, data: updatedData });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
