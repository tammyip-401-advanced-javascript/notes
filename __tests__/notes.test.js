'use strict';

const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');
const minimist = require('minimist');

describe('Notes Modules', () => {
  it('Testing execute(): Should call add() and output console.log', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        a: 'test',
      };
    });
    let input = new Input();
    let note = new Notes(args);
    const spy = jest.spyOn(cosole, 'log');
    const execute = jest.fn(note.execute(input.command));
    execute();

    expect(spy).toHaveBeenCalled();
  });

  it('Testing add(): should output console log', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        a: 'test',
      };
    });
    let input = new Input();
    let note = new Notes(args);
    const spy = jest.spyOn(cosole, 'log');
    const add = jest.fn(note.execute(args.command));
    execute();

    expect(spy).toHaveBeenCalled();
  });
})
