const {get, set} = require('./notes');
const getTime = require('./getTime');
const chalk = require('chalk');

module.exports = function use(args) {
    const {title, body} = args;
    const allNotes = get();

    let noteIndex = allNotes.findIndex(note => note.title === title)

    if(noteIndex > -1) {
        allNotes[noteIndex] = {
            ...allNotes[noteIndex],
            body: body,
            "Last Update": getTime()
        };
        set(allNotes);
        console.log(chalk.bgGreen.whiteBright("Note Updated"));
    } else console.log(chalk.bgRedBright.whiteBright("No note Found"));
}