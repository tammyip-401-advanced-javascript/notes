const supergoose = require('@code-fellows/supergoose');
const NoteModel = require('../models/notes-model.js');

beforeAll(async () => {
  await NoteModel.create({
    action: 'add',
    payload: 'this is a book',
    category: 'random',
  });

  await NoteModel.create({
    action: 'add',
    payload: 'good morning',
    category: 'random',
  });
});

describe('Database can create', () => {
  it('for best case', async () => {
    let response = await NoteModel.create({
      action: 'add',
      payload: 'this is an apple',
      category: 'random',
    });
    console.log(response);

    expect(response).not.toBe(false);
    expect(response.payload).toBe('this is an apple');
  })
});
