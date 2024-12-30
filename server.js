const express = require('express');
const path = require('path');
const app = express();
const PORT = 80;

// Serve static files from the "tS" directory
app.use(express.static(path.join(__dirname, 'tS')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'tS', 'land.html'));
});

app.listen(PORT, '0.0.0.0', (error) => {
  if (error) {
    console.error('Error starting server:', error);
    return;
  }
  console.log(`Server is running at http://localhost:${PORT}`);
});