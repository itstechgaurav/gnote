let yargs = require('yargs');

yargs.scriptName('gnote')

yargs.command({
    command: 'add',
    describe: 'Add new Note',
    builder: {
        title: {
            describe: 'Note Title',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Note Body',
            type: 'string',
            demandOption: true
        }
    },
    handler: require('./addNote')
});

yargs.command({
    command: 'list',
    describe: 'Show All Note',
    builder: {
        title: {
            describe: 'Note Title',
            type: 'string'
        }
    },
    handler: require('./allNote')
});

yargs.command({
    command: 'update',
    describe: 'update Note',
    builder: {
        title: {
            describe: 'Note Title',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Note Body',
            type: 'string',
            demandOption: true
        },
    },
    handler: require('./updateNote')
});

yargs.command({
    command: 'delete',
    describe: 'Delete Note',
    builder: {
        title: {
            describe: 'Note Title',
            type: 'string',
            demandOption: true
        }
    },
    handler: require('./deleteNote')
});


yargs.demandCommand().parse();