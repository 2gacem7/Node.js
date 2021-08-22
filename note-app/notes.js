const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)
    if (!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('The title (' + title + ') has been added!'))
    } else {
        console.log(chalk.red.inverse('Note (' + title + ') is taken!'));
    }
    console.log(notes);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToPick = notes.filter((note)=> note.title !== title)
    if (notes.length > notesToPick.length){
        console.log(chalk.green.inverse('The title (' + title +') has been removed'));
        saveNotes(notesToPick)
    } else {
        console.log(chalk.red.inverse('The tittle ('+ title +') is not found'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.find((note)=> note.title === title)
    if (findNote){
        console.log(chalk.green.inverse(title),
        chalk.magenta.inverse( findNote.body));
    } else {
        console.log(chalk.red.inverse('not found'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)  
    } catch(e) {
        return []
    }
    
}

module.exports = {
    addNotes: addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote: readNote
}

