const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../App.js')));

// Define a catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../App.js'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});