const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const getNotes = () => {
    const data = fs.readFileSync(path.join(__dirname, 'db/db.json'), 'utf8');
    return JSON.parse(data);
};

const saveNotes = (note) => {
    const notes = getNotes();
};

//get routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
  
  
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});
  
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
  
module.exports = app;
  