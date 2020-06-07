const {get, set} = require('./notes');
const chalk = require('chalk');

module.exports = args => {
    const {title} = args;
    const allNotes = get();

    let noteDeleteIndex = allNotes.findIndex(note => note.title === title)

    if(noteDeleteIndex > -1) {
        allNotes.splice(noteDeleteIndex, 1);
        set(allNotes);
        console.log(chalk.bgGreen.whiteBright("Note deleted"));
    } else console.log(chalk.bgRedBright.whiteBright("No note Found"));
}