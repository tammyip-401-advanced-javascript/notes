'use strict';
const Input = require('../lib/input.js');
/* 
 - Exports a constructor function DONE
 - Compose a prototype method that can execute the correct (any) operation, given the above object DONEISH
 - How will you use that object to run the correct method?
 - You can predict that add won’t be the only action we’re going to have to handle…
 - Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console log the text of the note to be added when the add command is executed (console.log)
*/

function Notes(args) {
    if (args.valid()) {
        this.execute(args.command);
    } else {
        console.error('Error! Invalid arguments sent to app.');
    }
};

Notes.prototype.execute = function (command) {
    if (command.action === 'add') {
        this.add(command.payload);
    }
};

Notes.prototype.add = function (payload) {
    let id = Math.floor(Math.random() * 1000);

    console.log('Adding note');
    console.log(id + ':', payload);
};

module.exports = Notes;
