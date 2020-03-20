'use strict';

const minimist = require('minimist');

/* 

    - Exports a constructor function
    - Uses minimist (or any other CLI library) to read command line arguments
    - Evaluates and Validates the input (is the command (i.e. ‘-a’) a valid one and is there data)
    - Returns an [instance] = [complex object] containing the action to perform and the payload for the action

*/

//  a -> does something

// what if we had a.valid() that told us if this was valid

// export a's constructor (which GIVES us a)
// we should have access to:

// a.command = { action: 'add', payload: 'string'}
// a.valid() => a function that tells us if a.command makes sense

// args is something like ['-a', 'my note']
function Input(args) {
    let formatted = minimist(args);

    // formatted is something like { _: [], a: 'my note' }

    this.command = {};

    let objectKeyArray = Object.keys(formatted);

    for (let i = 0; i < objectKeyArray.length; i++) {
        // i = 0 >>> key = _ >>> val = []
        // i = 1 >>> key = a >>> val = 'my note'

        let key = objectKeyArray[i];
        let val = formatted[key];

        if (key === 'a' || key === 'add') {
            this.command = { action: 'add', payload: val };
        } else {
            return 'error: no text';
        }
    }

    if (key === 'a' || key === 'add') {
        this.command = { action: 'add', payload: val };
    } else {
        return 'error: no text';
    }

    Input.prototype.valid = function () {
        if (this.command.action === 'add') {
            return typeof this.command.payload === 'string';
        } else if (!this.command || !this.command.action) {
            return false;
        }
    }
}
module.exports = Input;
