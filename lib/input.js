'use strict';

const minimist = require('minimist');
const Validator = require('./validator.js');

class Input {
    constructor() {
        this.args = minimist(process.argv.slice(2));
        this.key = Object.keys(this.args)[1];
        this.val = Object.values(this.args)[1];

        this.command = {};

        if (this.key === 'a' || this.key === 'add') {
            this.command = { action: 'add', payload: this.val };
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
