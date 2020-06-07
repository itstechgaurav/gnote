const fs = require('fs');

module.exports = {
    get() {
        let data;
        try {
            data = fs.readFileSync('./notes.txt', 'utf8');
        } catch(e) {
            data = [];
        }
        return data.length ? JSON.parse(data) : [];
    },
    set(data) {
        data = JSON.stringify(data);
        fs.writeFileSync('./notes.txt', data);
    }
}
