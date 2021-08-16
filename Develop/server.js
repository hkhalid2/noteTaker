const express = require('express');
const fs = require('fs');
const util = require('util');
const uuid = require('./helpers/uuid')
const {}
const path = require('path');
// const { clog } = require('./middleware/clog');
const PORT = process.env.port || 3001;
const app = express();


// GET Route for notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for feedback page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);