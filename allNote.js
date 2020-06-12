const {get} = require('./notes');
const chalk = require('chalk');
const table = require('./table');

module.exports = args => {
    const allNotes = get();
    if(!allNotes.length) return console.log(chalk.bgYellowBright.black('You don\'t have any notes'));
    if(args.title) {
        const note = allNotes.find(note => note.title === args.title);
        if(note) console.table(table([note]));
        else console.log(chalk.bgYellowBright.black('Note not found!!'));
    } else {
        console.table(table(get().map(note => {
            return note = {
                title: note.title
            }
        })));
        console.log(chalk.bgBlueBright.white(" ? USE: "), "--title=<note title> to view any of those");
    }
    
}