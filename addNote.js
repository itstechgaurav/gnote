let notes = require('./notes');
const chalk = require('chalk');
const getTime = require('./getTime');

module.exports = args => {
    let {title, body} = args;
    let allNotes = notes.get();
    let isDuplicateNote = allNotes.find(note => note.title === title);
    if(!isDuplicateNote) {
        allNotes.push({
            title,
            body,
            "Created At": getTime(),
            "Last Update": 'No Updated'
        });
        notes.set(allNotes);
        console.log(chalk.bgGreen.whiteBright("Note added"));
    } else {
        console.log(chalk.bgRedBright.whiteBright("Note already exists"));
    }
}