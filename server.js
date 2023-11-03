const express = require('express');
const app = express();
const port = 3000; // Choose a port of your preference

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express Server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
