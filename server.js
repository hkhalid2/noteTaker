const express = require('express');
const uuid = require('./helpers/uuid')
const { readFromFile, readAndAppend } = require('./helpers/fsUtil')
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// GET Route for initial start page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET Route for notes.html page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// // GET Route for index html file 
//CANNOT USE SINCE IT MESSES WITH LOADING/ADDING NOTES TO JSON FILE
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// GET Route for reading db.json and return all saved notes.
app.get('/api/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for recieving new note and return new note to client
app.post('/api/notes', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text, note_id } = req.body;
  
    // If all the required properties are present
    if (req.body) {
      // Variable for the object we will save along with unique id
      const note = {
        title,
        text,
        note_id: uuid(),
      };
  
      readAndAppend(note, './db/db.json');
  
      const response = {
        status: 'success',
        body: note,
      };
  
      res.json(response);

    } else {
      res.json('Error in posting new note');
    }
  });

// shows that server is running app on specified port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);




