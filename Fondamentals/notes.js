const fs = require('fs')

/* const getNotes = () => {
    return 'Je recherche un poste de développeur web fullstack';
} */

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=> {
        return note.title === title
    })
    if (duplicateNotes.length === 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note tittle taken!');
    }

    

    console.log(notes);
}

// ON VA ENREGISTRER LES ELEMENTS DANS LE FILE JSON D'ABORD NOUS ALLONS RENDRE LA DATA NOTES EN JSON AVANT D ECRIRE A L INTERIEUR
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// LOADNOTES VA NOUS SERVIR A LIRE DANS LE FILE JSON PUIS DE RENDRE LE JSON EN OBJET
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
    //getNotes: getNotes,
    addNotes: addNotes
}

