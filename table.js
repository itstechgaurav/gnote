module.exports = notes => {
    let newNotesData = {};

    notes.forEach((note, index) => {
        newNotesData[index + 1] = note;
    });

    return newNotesData;

}