'use strict';

const Validator = require('../lib/validator.js');

const schema = {
  action: { type: 'string', require: true },
  payload: { type: 'string', require: true }
}

const validator = new Validator(schema);

describe('Testing validator module', () => {
  it('testing non-object: array', () => {
    expect(validator.isValid([1, 2, 3])).toBeFalsy();
  });

  it('testing non-object: number', () => {
    expect(validator.isValid(100)).toBeFalsy();
  });

  it('testing isValid command', () => {
    const command = {
      action: 'add',
      payload: 'TEST'
    }
    expect(validator.isValid(command)).toBeTruthy();
  });

});


