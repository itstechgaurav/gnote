let yargs = require('yargs');
let appDetails = require('./appDetails');
yargs.scriptName('gnote');

// check and show if no command passed
let showAppDetails = !['add', 'list', 'remove', 'update', 'auth'].includes(yargs.argv._[0]);
if(showAppDetails) appDetails();

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


// commnad for author info

yargs.command({
    command: "auth",
    describe: "Show details about the author",
    handler: appDetails
})


yargs.demandCommand().parse();