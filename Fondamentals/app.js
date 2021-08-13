const chalk = require('chalk');
const getNotes = require('./notes');
const yargs = require('yargs');

// Create add command
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
        console.log(chalk.bold.green('Title: ', argv.title));
        console.log(chalk.bold.cyan('Body: ', argv.body));

    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: () => {
        console.log('Removing the note');
    }
})

yargs.command({
    command:'list',
    describe:'List of notes',
    handler: () => {
        console.log('Listing out all notes');
    }
})

yargs.command({
    command:'read',
    describe:'Read the note',
    handler: () => {
        console.log('Reading the note');
    }
})

yargs.parse()


