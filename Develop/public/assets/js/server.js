const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const getNotes = () => {
  const data = fs.readFileSync(path.join(__dirname, 'public', 'assets', 'db', 'db.json'), 'utf8');
  return JSON.parse(data);
};

const saveNotes = (newNote) => {
  const notes = getNotes();
  notes.push(newNote);
  fs.writeFileSync(path.join(__dirname, 'public', 'assets', 'db', 'db.json'), JSON.stringify(notes));
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  saveNotes(newNote);
  res.sendStatus(200);
});

app.get('/api/notes', (req, res) => {
  const notes = getNotes();
  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
