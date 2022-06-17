
const notes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const commands = Object.freeze({
    add: 'add',
    remove: 'remove',
    list: 'list',
    read: 'read'
});

const myargs = yargs();

// Customize yargs version
myargs.version('1.1.0')

myargs.command({
    command: commands.add,
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(chalk.green.inverse('Adding note'))
        console.log(`${argv.title} - ${argv.body}`);
        notes.createNote(argv.title, argv.body);
    }
});

myargs.command({
    command: commands.remove,
    describe: 'Remove note',
    handler: (argv) => {
        console.log(chalk.red.inverse('Removing note'), argv.title)
        notes.removeNote(argv.title);
    }
});

myargs.command({
    command: commands.list,
    describe: 'List notes',
    handler: () => {
        console.log(notes.readNotes());
    }
});

myargs.command({
    command: commands.read,
    describe: 'Read note',
    handler: (argv) => {
        console.log(chalk.yellow.inverse('Read note'), argv.title)
        const note = notes.readNote(argv.title);
        if (note) {
            console.log(chalk.yellow.inverse('Note body'), note.body);
        } else {
            console.log(chalk.yellow.inverse('Could not find such note'));
        }

    }
});

myargs.parse(hideBin(process.argv));
