'use strict';

const minimist = require('minimist');
const Validator = require('./validator.js');

class Input {
    constructor(input) {
        this.args = minimist(input);
        this.key = Object.keys(this.args)[1];
        this.val = Object.values(this.args)[1];
        this.category = Object.values(this.args)[2];

        this.command = {};

        if (this.key === 'a' || this.key === 'add') {
            this.command = { action: 'add', payload: this.val };
        }

        if (this.key === 'd' || this.key === 'delete') {
            this.command = { action: 'delete', idToDelete: this.val };
        }

        if (this.key === 'l' || this.key === 'list') {
            this.command = { action: 'list', listNotes: this.val };
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


module.exports = Input;
