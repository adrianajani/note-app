const note = require('express').Router();
const uuid = require('../helpers/uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

note.get ('/', (req, res) => {
    console.info(`${req.method} request received for new note`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

note.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const { title, text } = req.body;

    if (title && text) {
        const Note = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.error('Error in adding note');
    }
}   );  

module.exports = note;
