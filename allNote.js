const {get} = require('./notes');
const chalk = require('chalk');

module.exports = args => {
    const allNotes = get();
    if(!allNotes.length) return console.log(chalk.bgYellowBright.black('You don\'t have any notes'));
    if(args.title) {
        const noteIndex = allNotes.findIndex(note => note.title === args.title);
        if(noteIndex > -1) {
            console.table([allNotes[noteIndex]])
        } else console.log(chalk.bgYellowBright.black('Note not found!!'));
    } else {
        console.table(get().map(note => {
            return note = {
                title: note.title
            }
        }));
        console.log(chalk.bgBlueBright.white(" ? USE: "), "--title=<note title> to view any of those");
    }
    
}