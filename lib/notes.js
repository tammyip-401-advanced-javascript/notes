'use strict';

const Validator = require('./validator.js');

/* 
 - Exports a constructor function DONE
 - Compose a prototype method that can execute the correct (any) operation, given the above object DONEISH
 - How will you use that object to run the correct method?
 - You can predict that add won’t be the only action we’re going to have to handle…
 - Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console log the text of the note to be added when the add command is executed (console.log)
*/

class Notes {
    constructor(args) {
        if (args.valid()) {
            this.execute(args.command);
        } else {
            console.error('Error! Invalid arguments sent to app.');
        }
    }

    execute(command) {
        if (command.action === 'add') {
            this.add(command.payload);
        }
    }

    add(payload) {
        this.note = { id: Math.floor(Math.random() * 1000), text: payload };

        if (this.validate()) {
            console.log('Adding note');
            console.log(id + ':', payload);
        }
    }

    validate() {

        const schema = {
            action: { type: 'string', required: true },
            payload: { type: 'string', required: true },
        };
        const validator = new Validator(schema);
        return validator.isValid(this.command);
    }
};

module.exports = Notes;
