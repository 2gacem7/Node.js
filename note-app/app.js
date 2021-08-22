const chalk = require('chalk');
const notes = require('./notes');
const yargs = require('yargs');
const { demandOption, argv } = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe:'Note description',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder : {
        title:{
            describe:'Note title removed',
            demandOption:true,
            type:'string'
        },
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List of notes',
    handler: (argv) => {
        notes.listNotes(argv.notes)
    }
})

yargs.command({
    command:'read',
    describe:'Read the note',
    title:{
        describe:'Note title removed',
        demandOption:true,
        type:'string'
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
})

yargs.parse()


