const fs = require('fs');
const chalk = require('chalk');

const notesData = 'mynotes.json';

function createNote(newTitle, newBody) {

//debugger

    const notesArr = loadNotesAsArray();

    notesArr.push(
        {
            title: newTitle,
            body: newBody
        }
    );

    saveNotesArray(notesArr);

}


function removeNote(title) {

    const notesArr = loadNotesAsArray();

    const itemIndexToRemove = notesArr.findIndex((el) => el.title.toLowerCase() === title.toLowerCase());

    if (itemIndexToRemove != -1) {

        notesArr.splice(itemIndexToRemove, 1);
        saveNotesArray(notesArr);
        console.log(chalk.inverse.green(`note with title "${title}" was sucessfully removed`));
    } else {
        console.log(chalk.inverse.yellow(`note with title "${title}" could not be found in the notes`));
    }

}

function loadNotesAsArray() {
    let noteStr;
    let notesArr;

    if (fs.existsSync(notesData)) {
        noteStr = fs.readFileSync(notesData).toString();
        notesArr = JSON.parse(noteStr);
    } else {
        notesArr = new Array();
    }

    return notesArr;
}

function readNote(title) {
    const notesArr = loadNotesAsArray();

    const itemIndexToRemove = notesArr.findIndex((el) => el.title.toLowerCase() === title.toLowerCase());

    if (itemIndexToRemove != -1) {
        return notesArr[itemIndexToRemove];

    } else {
        return undefined;
    }
}

function saveNotesArray(notesArr) {
    fs.writeFileSync(notesData, JSON.stringify(notesArr));
}


function readNotes() {
    return fs.readFileSync(notesData).toString();
}

module.exports = { readNotes, createNote, removeNote, readNote }