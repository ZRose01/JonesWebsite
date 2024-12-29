const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "tS" directory
app.use(express.static(path.join(__dirname, 'tS')));

app.listen(() => {
  console.log(`Server is running at http://localhost`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'tS', 'land.html'));
});